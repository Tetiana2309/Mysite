const animatedImage = document.getElementById("animated-image");

function animateImage() {
  const duration = 10000; // Продолжительность анимации в миллисекундах
  const startTime = Date.now();

  function updateAnimation() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const progress = (elapsedTime % duration) / duration; // Определение текущего прогресса анимации

    const scale = 1 + 0.1 * Math.sin(progress * Math.PI * 2); // Изменение масштаба
    const translateY = -10 * Math.sin(progress * Math.PI * 2); // Изменение вертикального положения

    animatedImage.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    animatedImage.style.opacity = 0.7 + 0.3 * Math.cos(progress * Math.PI * 2); // Изменение прозрачности

    requestAnimationFrame(updateAnimation);
  }

  updateAnimation();
}

animateImage();
