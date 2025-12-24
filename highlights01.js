
  const video = document.querySelector("video");

  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // opcional: volta pro início
  });

  video.addEventListener("click", () => {
    video.muted = false;
    video.controls = true;
    video.play();
  });

