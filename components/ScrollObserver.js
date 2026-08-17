import { useEffect } from 'react';

// Ajoute la classe "section-visible" aux éléments ".reveal" dès qu'ils
// entrent dans le viewport, pour une apparition discrète au scroll
// (voir la classe .reveal dans globals.css).
export const SectionBorderObserver = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return null;
};
