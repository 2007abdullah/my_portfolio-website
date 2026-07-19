/**
 * includeHTML.js
 * Fetches each section's HTML partial from /partials and injects it
 * into its matching placeholder <div> in index.html.
 *
 * Note: fetch() requires the page to be served over http(s) — this
 * won't work by double-clicking index.html directly (file://).
 * Use a local server (e.g. `python -m http.server`) or GitHub Pages.
 */

const SECTIONS = [
  'navbar',
  'hero',
  'about',
  'skills',
  'projects',
  'services',
  'testimonials',
  'contact',
  'footer'
];

export async function includeHTML() {
  await Promise.all(
    SECTIONS.map(async (name) => {
      const placeholder = document.getElementById(`${name}-placeholder`);
      if (!placeholder) return;

      try {
        const response = await fetch(`partials/${name}.html`);
        if (!response.ok) throw new Error(`Failed to load ${name}.html`);
        placeholder.outerHTML = await response.text();
      } catch (err) {
        placeholder.innerHTML = `<!-- Could not load ${name}.html: ${err.message} -->`;
        console.error(err);
      }
    })
  );
}
