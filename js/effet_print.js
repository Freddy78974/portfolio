
  // Textes à afficher
  const textH1 = "Bienvenue sur mon portfolio"; // Texte pour le H1
  const textH2 = "Développeur full stack\nJe m'appelle Jean-Frédéric Nangy"; // Texte pour le H2

  // Paramètres
  const typingSpeed = 15; // Vitesse d'écriture en millisecondes

  // Cible les éléments HTML
  const typingEffectH1 = document.getElementById("typing-effect-h1");
  const typingEffectH2 = document.getElementById("typing-effect-h2");

  // Fonction pour afficher progressivement le texte
  function typeText(element, text, callback) {
    let index = 0;
    element.textContent = ""; // Efface le texte existant avant de commencer


    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index); // Ajoute un caractère
        index++;
        setTimeout(type, typingSpeed); // Continue l'animation
      } else if (callback) {
        callback(); // Appelle la fonction suivante si elle existe
      }
    }
    type();
  }

  // Lance l'effet d'écriture pour H1, puis H2
  typeText(typingEffectH1, textH1, () => {
    typeText(typingEffectH2, textH2);
  });
