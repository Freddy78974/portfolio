import { useEffect, useLayoutEffect } from 'react';

// Evite un flash du texte statique (SEO/no-JS) avant que l'animation ne démarre :
// useLayoutEffect s'exécute avant que le navigateur ne peigne l'écran.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function useTypingEffect(texts, speed = 50) {
  useIsomorphicLayoutEffect(() => {
    const elements = texts.map(t => document.getElementById(t.id));
    
    // Effacer tout contenu existant immédiatement
    elements.forEach(el => {
      if (el) el.textContent = '';
    });

    let currentIndex = 0;
    
    const typeNext = () => {
      if (currentIndex >= texts.length) return;
      
      const { id, text } = texts[currentIndex];
      const element = document.getElementById(id);
      if (!element) return;
      
      let charIndex = 0;
      
      const type = () => {
        if (charIndex < text.length) {
          element.textContent = text.substring(0, charIndex + 1);
          charIndex++;
          setTimeout(type, speed);
        } else {
          currentIndex++;
          setTimeout(typeNext, 500);
        }
      };
      
      type();
    };
    
    // Démarrer avec un léger délai
    const timeout = setTimeout(typeNext, 300);
    
    return () => clearTimeout(timeout);
  }, [texts, speed]);
}