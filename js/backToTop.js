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
 * Enables the CV download button when a resume file is linked in the hero section.
 */
export function initDownloadCv() {
  const cvBtn = document.getElementById('downloadCv');
  if (!cvBtn) return;

  cvBtn.setAttribute('download', 'Abdullah-Hayat-Resume.pdf');
}
