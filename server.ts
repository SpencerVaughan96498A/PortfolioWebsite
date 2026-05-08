import express from "express";
import { createServer as createViteServer, loadEnv } from "vite";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Chat (Generic fetch to Gemini API)
  app.post("/api/chat", async (req, res) => {
    const { resumeContent, question, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    // Handle missing or placeholder keys gracefully
    if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY" || apiKey.startsWith("YOUR_")) {
      console.warn("AI Chat requested but no valid API key found. Returning demo response.");
      return res.json({ 
        text: "The AI Assistant is currently in 'Demo Mode' because a valid Gemini API key hasn't been configured in the .env file. Once you add a real key, I'll be able to answer specific questions about your resume!" 
      });
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
      console.log(`[AI Chat] Sending request to Gemini...`);
      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Gemini API Error:", response.status, errorData);
        return res.status(response.status).json({ error: "Gemini API returned an error" });
      }

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
    const env = loadEnv("development", __dirname, "");
    const vite = await createViteServer({
      configFile: false, 
      root: __dirname,
      server: { 
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: "spa",
      plugins: [react(), tailwindcss()],
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      },
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
