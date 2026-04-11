/* =============================================
   You-Ting Wu — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Intersection Observer: timeline scroll-in ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = Array.from(entry.target.parentElement.children);
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 90);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.tl-item').forEach(el => observer.observe(el));

});
