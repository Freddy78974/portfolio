import { useState } from 'react';
import styles from '../src/styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo - visible sur toutes les tailles d'écran */}
      <div className={styles.logo}>
        <a href="#top">Portfolio</a>
      </div>

      {/* Bouton hamburger (visible uniquement sur mobile) */}
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
      </button>

      {/* Menu de navigation */}
      <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
        <li><a href="#description" onClick={closeMenu}>À propos</a></li>
        <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
        <li><a href="#cv" onClick={closeMenu}>CV</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Overlay pour fermer le menu en cliquant à côté */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </nav>
  );
}
