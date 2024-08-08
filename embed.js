// replace current yotube URL with embedded one
const currentUrl = window.location.href;
if (currentUrl.includes("youtube.com/watch?v=")) {
    const videoId = new URL(currentUrl).searchParams.get("v");
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    window.location.href = embedUrl;
} else if (currentUrl.includes("youtube.com/embed")) {
    alert("This YouTube Video is already embedded.");
} else {
    alert("This is not a YouTube Video URL.");
}
