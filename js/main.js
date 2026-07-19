/**
 * main.js
 * Entry point. Loads all HTML partials first, then initializes
 * every feature module once the real DOM elements exist.
 */
import { includeHTML } from './includeHTML.js';
import { initNavbar } from './navbar.js';
import { initTyping } from './typing.js';
import { initScrollReveal } from './scrollReveal.js';
import { initSkillBars } from './skillBars.js';
import { initContactForm } from './contactForm.js';
import { initBackToTop, initDownloadCv } from './backToTop.js';
import { initFooterYear } from './footerYear.js';

document.addEventListener('DOMContentLoaded', async () => {
  await includeHTML();

  initNavbar();
  initTyping();
  initScrollReveal();
  initSkillBars();
  initContactForm();
  initBackToTop();
  initDownloadCv();
  initFooterYear();
});
