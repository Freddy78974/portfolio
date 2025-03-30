import styles from '../src/styles/Header.module.css';
import useTypingEffect from '../src/hooks/useTypingEffect';
import profileImage from '/assets/images/IMG_4674.png';

export default function Header() {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio' : '';

  useTypingEffect([
    { id: 'typing-effect-h1', text: 'Bienvenue sur mon portfolio' },
    { id: 'typing-effect-h2', text: 'Développeur full stack\nJe m\'appelle Jean-Frédéric Nangy' }
  ], 40); // Vitesse légèrement réduite

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.typingEffect}>
          <h1 id="typing-effect-h1" className={styles.title} style={{ color: 'white' }}></h1>
          <h2 id="typing-effect-h2" className={styles.subtitle} style={{ color: 'white' }}></h2>
        </div>
        <div className={styles.profileContainer}>
          <img
            src={`${basePath}${profileImage.src}`} 
            alt="Photo de profil"
            className={styles.profilePhoto}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}