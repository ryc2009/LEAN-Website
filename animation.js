
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".section-heading, .split-layout > div, .split-layout > aside, .split-layout > figure, .split-layout > img, .card, .highlight-card, .progress-card, .goal-event > div, .auction-feature > div, .steps article, .faq details, .mission-image, .beginning-image, .partner-section img, .callout h2, .callout p, .callout .button"
  );

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08
    }
  );

  elements.forEach(function (element) {
    element.classList.add("lean-reveal");
    observer.observe(element);
  });
});
