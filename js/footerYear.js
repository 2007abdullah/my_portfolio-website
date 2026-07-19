/**
 * footerYear.js
 * Writes the current year into the footer's copyright line.
 */
export function initFooterYear() {
  const yearEl = document.getElementById('year');
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
}
