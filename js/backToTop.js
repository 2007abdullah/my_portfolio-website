/**
 * backToTop.js
 * Shows/hides the floating back-to-top button based on scroll position.
 */
export function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 400);
  });
}

/**
 * Placeholder handler for the "Download CV" button until a real
 * CV file is added to /assets and linked in partials/hero.html.
 */
export function initDownloadCv() {
  const cvBtn = document.getElementById('downloadCv');
  if (!cvBtn) return;

  cvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Add your CV file to the assets folder and link it here (e.g. assets/Abdullah-Hayat-CV.pdf).');
  });
}
