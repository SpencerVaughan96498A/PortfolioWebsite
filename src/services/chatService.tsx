export async function askAboutResume(resumeContent: string, question: string, history: any[]) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumeContent, question, history }),
    });

    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Chat service error:", error);
    return "Sorry, I'm having trouble connecting right now.";
  }
}
