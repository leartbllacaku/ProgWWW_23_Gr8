const valueToDisplay = document.querySelectorAll(".down1-h");
const interval = 1000;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const endValue = parseInt(target.getAttribute("data-val"));
      const duration = Math.min(interval, 3000); // Limit duration to 1000ms

      animateCounting(target, endValue, duration);
      observer.unobserve(target);
    }
  });
});

function animateCounting(target, endValue, duration) {
  let startValue = 0;
  const startTime = performance.now();

  function updateCounter(timestamp) {
    const progress = Math.min(1, (timestamp - startTime) / duration);
    startValue = Math.ceil(progress * endValue);

    if (endValue === 65) {
      target.textContent = startValue + "+";
    } else if (endValue === 100) {
      target.textContent = startValue + "%";
    } else {
      target.textContent = startValue;
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

valueToDisplay.forEach((value) => {
  observer.observe(value);
});
