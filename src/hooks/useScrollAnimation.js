import { useEffect } from 'react';

export default function useScrollAnimation(selector, offset = 0.2) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.transform = 'translateY(30px)';
          entry.target.style.opacity = '0';
        }
      });
    }, { threshold: offset });

    elements.forEach(el => {
      el.style.transition = 'transform 0.6s var(--apple-ease), opacity 0.4s var(--apple-ease)';
      observer.observe(el);
    });

    return () => elements.forEach(el => observer.unobserve(el));
  }, [selector, offset]);
}