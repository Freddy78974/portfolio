import { useEffect, useState } from 'react';
import styles from '../src/styles/Navbar.module.css';
import projects from '../src/data/projects';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#top">~/jean-frederic</a>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
      </button>

      <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
        <li><a href="#profil" onClick={closeMenu}>Profil</a></li>
        {projects.length > 0 && (
          <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
        )}
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu} aria-hidden="true"></div>
      )}
    </nav>
  );
}
