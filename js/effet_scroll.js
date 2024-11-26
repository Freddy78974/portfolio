document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".container");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // L'élément entre dans la vue
          entry.target.classList.add("visible");
        } else {
          // L'élément sort de la vue
          entry.target.classList.remove("visible");
        }
      });
    });
  
    // Observez chaque section
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".container-photo");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // L'élément entre dans la vue
          entry.target.classList.add("visible");
        } else {
          // L'élément sort de la vue
          entry.target.classList.remove("visible");
        }
      });
    });
  
    // Observez chaque section
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  