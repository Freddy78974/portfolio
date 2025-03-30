import { useEffect } from 'react';

export default function useTypingEffect(texts, speed = 50) {
  useEffect(() => {
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