/**
 * skillBars.js
 * Animates the width of each .bar-fill element to its data-width
 * value once it scrolls into view.
 */
export function initSkillBars() {
  const barFills = document.querySelectorAll('.bar-fill');
  if (!barFills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.width}%`;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  barFills.forEach((el) => observer.observe(el));
}
