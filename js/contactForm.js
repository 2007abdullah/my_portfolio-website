/**
 * contactForm.js
 * Front-end-only submit handler for the contact form. Shows a
 * confirmation message and resets the form.
 *
 * To actually receive messages, replace the body of the submit
 * handler with a call to a service like Formspree or EmailJS,
 * or POST to your own backend endpoint.
 */
export function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Thanks! Your message has been noted. I'll get back to you soon.";
    form.reset();
    setTimeout(() => {
      status.textContent = '';
    }, 5000);
  });
}
