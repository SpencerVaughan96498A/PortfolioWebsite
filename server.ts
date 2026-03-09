import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Chat (Generic fetch to Gemini API)
  app.post("/api/chat", async (req, res) => {
    const { resumeContent, question, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API Key not configured" });
    }

    const systemInstruction = `
      You are an AI assistant for a professional portfolio website. 
      Your job is to answer questions about the user based on their resume content provided below.
      The resume is written in LaTeX format. Please parse it mentally and provide helpful, professional answers.
      If the answer is not in the resume, politely say so and offer to answer other questions.
      
      RESUME CONTENT (LaTeX):
      ${resumeContent}
    `;

    // Standard fetch to Gemini API (No SDK)
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    if (!geminiUrl || !geminiUrl.startsWith("https://")) {
      return res.status(500).json({ error: "Invalid Gemini API URL" });
    }

    const contents = [
      { role: "user", parts: [{ text: systemInstruction }] },
      ...history.map((h: any) => ({
        role: h.role === "model" ? "model" : "user",
        parts: [{ text: h.parts[0].text }]
      })),
      { role: "user", parts: [{ text: question }] }
    ];

    try {
      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents })
      });

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      res.json({ text });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to communicate with AI" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
