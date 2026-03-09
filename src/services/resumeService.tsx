export async function fetchResumeFromGit(url: string): Promise<string> {
  if (!url || !url.startsWith("http")) {
    console.error("Invalid resume URL provided:", url);
    return "";
  }

  // Convert GitHub URL to raw content URL if needed
  let rawUrl = url;
  if (url.includes("github.com") && !url.includes("raw.githubusercontent.com")) {
    rawUrl = url
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/");
  }

  try {
    const response = await fetch(rawUrl);
    if (!response.ok) {
      console.error(`Failed to fetch resume: ${response.status} ${response.statusText}`);
      throw new Error("Failed to fetch resume");
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching resume from Git:", error);
    return "";
  }
}
