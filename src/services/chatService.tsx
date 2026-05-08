export async function askAboutResume(resumeContent: string, question: string, history: any[]) {
  try {
    // In the browser, relative URLs are fine. In Node.js (SSR/Tests), we need absolute URLs.
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/chat`, {
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
