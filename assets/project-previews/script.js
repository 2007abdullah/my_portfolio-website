/* Nova landing page — vanilla JS, modular */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/** Mobile navigation: toggle, close on link click / Escape */
function initMobileNav() {
  const toggle = $('.menu-toggle'), menu = $('#nav-menu');
  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  $$('a', menu).forEach((a) => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && setOpen(false));
  window.addEventListener('resize', () => window.innerWidth > 820 && setOpen(false));
}

/** Smooth scrolling for in-page anchors (also respects reduced motion) */
function initSmoothScroll() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const target = $(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.pushState(null, '', a.getAttribute('href'));
  }));
}

/** Scroll reveal using IntersectionObserver */
function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) return items.forEach((i) => i.classList.add('visible'));
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  items.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); });
}

/** Email form: validate, show message, reset */
function initForm() {
  const form = $('#signup'), input = $('#email'), msg = $('#form-msg');
  const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const show = (text, ok) => { msg.textContent = text; msg.className = `form-msg ${ok ? 'ok' : 'err'}`; };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!valid(input.value.trim())) {
      input.setAttribute('aria-invalid', 'true');
      show('Please enter a valid email address, like you@company.com.', false);
      return input.focus();
    }
    input.removeAttribute('aria-invalid');
    form.reset();
    show("Thanks! We'll reach out to you.", true);
  });
  input.addEventListener('input', () => input.removeAttribute('aria-invalid'));
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav(); initSmoothScroll(); initReveal(); initForm();
});
