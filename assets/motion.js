(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    '.workflow-step, .screen-row figure, .source-list article, .privacy-list li, .closing-cta-inner'
  );
  if (!targets.length || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('motion-ready');
  targets.forEach((target) => target.classList.add('motion-reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -4% 0px' });

  targets.forEach((target) => observer.observe(target));
})();
