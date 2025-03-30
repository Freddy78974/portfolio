document.addEventListener("DOMContentLoaded", () => {
  // Textes à afficher
  const textH1 = "Bienvenue sur mon portfolio";
  const textH2 = "Développeur full stack\nJe m'appelle Jean-Frédéric Nangy";

  // Paramètres
  const typingSpeed = 50;
  const delayBetweenLines = 500;

  function typeText(element, text, callback) {
    let index = 0;
    element.textContent = ""; // Efface complètement avant de commencer

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  // Démarrer l'animation seulement si les éléments existent
  const h1Element = document.getElementById("typing-effect-h1");
  const h2Element = document.getElementById("typing-effect-h2");

  if (h1Element && h2Element) {
    // Effacer tout contenu initial
    h1Element.textContent = "";
    h2Element.textContent = "";

    // Démarrer l'animation après un léger délai
    setTimeout(() => {
      typeText(h1Element, textH1, () => {
        setTimeout(() => {
          typeText(h2Element, textH2);
        }, delayBetweenLines);
      });
    }, 100);
  }
});