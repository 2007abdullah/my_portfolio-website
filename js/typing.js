/**
 * typing.js
 * Types and deletes a rotating list of role phrases in the hero section.
 */
export function initTyping() {
  const typedEl = document.getElementById('typedText');
  if (!typedEl) return;

  const phrases = [
    'Frontend Developer',
    'React Learner',
    'Freelancer',
    'Software Engineering Student'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 90);
  }

  tick();
}
