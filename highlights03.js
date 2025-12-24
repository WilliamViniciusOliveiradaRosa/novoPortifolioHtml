const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  const container = video.parentElement;

  // Preview no hover
  container.addEventListener("mouseenter", () => {
    video.play();
  });

  container.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  // Clique → abre outra página com o vídeo
  container.addEventListener("click", () => {
    const videoSrc = video.getAttribute("src");
    window.location.href = `player.html?video=${encodeURIComponent(videoSrc)}`;
  });
});
