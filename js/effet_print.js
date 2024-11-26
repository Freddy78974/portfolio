// Texte à afficher
const text = "Bonjour et bienvenue sur mon site !";

// Paramètres
const typingSpeed = 100; // Vitesse d'écriture en millisecondes

// Cible le conteneur
const typingEffectElement = document.getElementById("typing-effect");

// Fonction pour afficher le texte progressivement
let index = 0;

function typeText() {
  if (index < text.length) {
    typingEffectElement.textContent += text.charAt(index); // Ajoute un caractère
    index++;
    setTimeout(typeText, typingSpeed); // Continue l'animation
  }
}

// Lance l'effet
typeText();
