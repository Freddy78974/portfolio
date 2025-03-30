export const typeText = (element, text, callback, speed = 50) => {
    if (!element) return;
    
    let index = 0;
    element.textContent = "";
  
    const type = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    };
  
    type();
  };
  
  export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };