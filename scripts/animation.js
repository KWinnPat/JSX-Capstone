function animateNameShuffle(element, names, duration = 3000, finalName = null) {
  const originalSize = window.getComputedStyle(element).fontSize;
  console.log(names);

  element.style.transition = "font-size 0.5s ease-out";
  element.style.fontSize = "30px";

  let startTime = null;
  const shuffleCount = 35;
  let currentShuffle = 0;

  function shuffleFrame(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const shuffleInterval = duration / shuffleCount;

    if (progress > currentShuffle * shuffleInterval) {
      const randomIndex = Math.floor(Math.random() * names.length);
      element.textContent = names[randomIndex].firstName;
      currentShuffle++;
    }

    if (progress >= duration) {
      element.textContent = finalName;

      element.style.transition =
        "font-size 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
      element.style.fontSize = originalSize;

      setTimeout(() => {
        element.style.transition = "";
      }, 500);

      return;
    }

    requestAnimationFrame(shuffleFrame);
  }

  setTimeout(() => {
    requestAnimationFrame(shuffleFrame);
  }, 500);
}

export { animateNameShuffle };
