document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  const cursorDot = document.querySelector('.cursor-dot');
  const cursorRing = document.querySelector('.cursor-ring');
  const hoverTargets = document.querySelectorAll('a, button, .btn, .card, .review-card, .proof-step');

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
    }
    if (cursorRing) {
      cursorRing.style.left = `${x}px`;
      cursorRing.style.top = `${y}px`;
    }
    document.documentElement.style.setProperty('--cursor-x', `${x}px`);
    document.documentElement.style.setProperty('--cursor-y', `${y}px`);
  };

  const handleMouseEnter = () => document.body.classList.add('cursor-hover');
  const handleMouseLeave = () => document.body.classList.remove('cursor-hover');

  window.addEventListener('mousemove', handleMouseMove);

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
  });
});
