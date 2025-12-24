// Seleciona todos os vídeos da página
const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  const container = video.parentElement;

  // Preview ao passar o mouse
  container.addEventListener("mouseenter", () => {
    video.play();
  });

  // Para o preview ao sair
  container.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  // Clique para assistir completo
  container.addEventListener("click", () => {
    video.muted = false;
    video.controls = true;
    video.play();
  });
});
