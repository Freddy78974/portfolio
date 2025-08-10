import { useEffect, useRef, useState } from 'react';

const ScrollObserver = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`${isVisible ? 'visible' : ''}`}
      style={{ display: 'inherit' }}
    >
      {children}
    </div>
  );
};

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
              console.log('Container trouvé:', headerContainer.className);
              const kittElement = document.createElement('div');
              kittElement.className = 'kitt-border-global';
              
              const lightElement1 = document.createElement('div');
              lightElement1.className = 'kitt-light-1';
              console.log('Trait 1 créé:', lightElement1.className);
              
              const lightElement2 = document.createElement('div');
              lightElement2.className = 'kitt-light-2';
              console.log('Trait 2 créé:', lightElement2.className);
              
              kittElement.appendChild(lightElement1);
              kittElement.appendChild(lightElement2);
              
              headerContainer.style.position = 'relative';
              headerContainer.appendChild(kittElement);
              headerContainer.classList.add('section-visible');
              console.log('Effet KITT global ajouté avec 2 traits');
              
              // Debug: vérifier que les éléments sont bien dans le DOM
              setTimeout(() => {
                const checkElement = headerContainer.querySelector('.kitt-border-global');
                if (checkElement) {
                  console.log('Vérification - KITT border trouvé:', checkElement);
                  console.log('Nombre de traits lumineux:', checkElement.children.length);
                }
              }, 100);
            } else {
              console.log('Container non trouvé ou effet déjà présent');
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
        console.log('Sélecteur simple utilisé');
      }
      
      if (headerContainer && !headerContainer.querySelector('.kitt-border-global')) {
        console.log('Initialisation - Container trouvé:', headerContainer.className);
        const kittElement = document.createElement('div');
        kittElement.className = 'kitt-border-global';
        
        const lightElement1 = document.createElement('div');
        lightElement1.className = 'kitt-light-1';
        console.log('Initialisation - Trait 1 créé');
        
        const lightElement2 = document.createElement('div');
        lightElement2.className = 'kitt-light-2';
        console.log('Initialisation - Trait 2 créé');
        
        kittElement.appendChild(lightElement1);
        kittElement.appendChild(lightElement2);
        
        headerContainer.style.position = 'relative';
        headerContainer.appendChild(kittElement);
        headerContainer.classList.add('section-visible');
        console.log('Effet KITT global initialisé avec 2 traits');
        
        // Debug: vérifier immédiatement
        console.log('Nombre d\'enfants dans kitt-border:', kittElement.children.length);
        for (let i = 0; i < kittElement.children.length; i++) {
          console.log(`Enfant ${i}:`, kittElement.children[i].className);
        }
      } else {
        console.log('Initialisation - Container non trouvé ou effet déjà présent');
        if (headerContainer) {
          console.log('Classes du container:', headerContainer.className);
        } else {
          console.log('Aucun container trouvé dans le header');
          // Debug: lister tous les divs dans le header
          const allDivs = header.querySelectorAll('div');
          allDivs.forEach((div, index) => {
            console.log(`Div ${index}:`, div.className);
          });
        }
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

export default ScrollObserver;