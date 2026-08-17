import { useEffect } from 'react';

// Composant pour l'effet de bordure lumineuse sur les sections
export const SectionBorderObserver = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.2
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          
                    // Traitement spécial pour le header - effet KITT global
          if (entry.target.tagName.toLowerCase() === 'header') {
            let headerContainer = entry.target.querySelector('[class*="container"][class*="right"]');
            
            // Si le sélecteur spécifique ne fonctionne pas, essayons plus simple
            if (!headerContainer) {
              headerContainer = entry.target.querySelector('div[class*="container"]');
            }
            
            if (headerContainer && !headerContainer.querySelector('.kitt-border-global')) {
              const kittElement = document.createElement('div');
              kittElement.className = 'kitt-border-global';

              const lightElement1 = document.createElement('div');
              lightElement1.className = 'kitt-light-1';

              const lightElement2 = document.createElement('div');
              lightElement2.className = 'kitt-light-2';

              kittElement.appendChild(lightElement1);
              kittElement.appendChild(lightElement2);

              headerContainer.style.position = 'relative';
              headerContainer.appendChild(kittElement);
              headerContainer.classList.add('section-visible');
            }
            return;
          }
          
          // Pour les autres sections, comportement normal avec deux traits
          if (!entry.target.querySelector('.kitt-border')) {
            const kittElement = document.createElement('div');
            kittElement.className = 'kitt-border';
            
            // Premier trait lumineux
            const lightElement1 = document.createElement('div');
            lightElement1.className = 'kitt-light';
            kittElement.appendChild(lightElement1);
            
            // Deuxième trait lumineux
            const lightElement2 = document.createElement('div');
            lightElement2.className = 'kitt-light-section-2';
            kittElement.appendChild(lightElement2);
            
            entry.target.appendChild(kittElement);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer toutes les sections Y COMPRIS le header
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

        // Ajouter immédiatement l'effet global au header (toujours visible)
    const header = document.querySelector('header');
    if (header) {
      let headerContainer = header.querySelector('[class*="container"][class*="right"]');
      
      // Si le sélecteur spécifique ne fonctionne pas, essayons plus simple
      if (!headerContainer) {
        headerContainer = header.querySelector('div[class*="container"]');
      }

      if (headerContainer && !headerContainer.querySelector('.kitt-border-global')) {
        const kittElement = document.createElement('div');
        kittElement.className = 'kitt-border-global';

        const lightElement1 = document.createElement('div');
        lightElement1.className = 'kitt-light-1';

        const lightElement2 = document.createElement('div');
        lightElement2.className = 'kitt-light-2';

        kittElement.appendChild(lightElement1);
        kittElement.appendChild(lightElement2);

        headerContainer.style.position = 'relative';
        headerContainer.appendChild(kittElement);
        headerContainer.classList.add('section-visible');
      }
    }

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
};