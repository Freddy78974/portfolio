// // Texte à afficher
// const text = "Bienvenue sur mon portfolio";

// // Paramètres
// const typingSpeed = 100; // Vitesse d'écriture en millisecondes

// // Cible le conteneur
// const typingEffectElement = document.getElementById("typing-effect");

// // Fonction pour afficher le texte progressivement
// let index = 0;

// // function typeText() {
// //   if (index < text.length) {
// //     typingEffectElement.textContent += text.charAt(index); // Ajoute un caractère
// //     index++;
// //     setTimeout(typeText, typingSpeed); // Continue l'animation
// //   }
// // }

// // Lance l'effet
// // typeText();

// const texts = ["Bienvenue sur mon portfolio", "Développeur full stack"];
// let textIndex = 0;

// function typeDynamicText() {
//   if (index < texts[textIndex].length) {
//     typingEffectElement.textContent += texts[textIndex].charAt(index);
//     index++;
//     setTimeout(typeDynamicText, typingSpeed);
//   } else {
//     setTimeout(() => {
//       typingEffectElement.textContent = "";
//       index = 0;
//       textIndex = (textIndex + 1) % texts.length; // Passer au texte suivant
//       typeDynamicText();
//     }, 1000); // Pause avant de recommencer
//   }
// }

// typeDynamicText();


// Textes à afficher
const textH1 = "Bienvenue sur mon portfolio"; // Texte pour le H1
const textH2 = "Développeur full stack"; // Texte pour le H2

// Paramètres
const typingSpeed = 100; // Vitesse d'écriture en millisecondes

// Cible les éléments HTML
const typingEffectH1 = document.getElementById("typing-effect-h1");
const typingEffectH2 = document.getElementById("typing-effect-h2");

// Fonction pour afficher progressivement le texte
function typeText(element, text, callback) {
  let index = 0;

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
  typeText(typingEffectH2, textH2); // Lance le texte H2 après H1
});
