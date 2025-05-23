import styles from '../src/styles/Header.module.css';
import useTypingEffect from '../src/hooks/useTypingEffect';

export default function Header() {
  const imagePath = 'assets/images/IMG_4674.jpg';

  useTypingEffect([
    { id: 'typing-effect-h1', text: 'Bienvenue sur mon portfolio' },
    { id: 'typing-effect-h2', text: 'Développeur full stack\nJe m\'appelle Jean-Frédéric Nangy' }
  ], 40); // Vitesse légèrement réduite

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.typingEffect}>
          <h1 
          data-testid="typing-effect-h1" 
          id="typing-effect-h1" 
          className={styles.title} 
          style={{ color: 'white' }}
          >
          </h1>
          <h2 
          data-testid="typing-effect-h2" 
          id="typing-effect-h2" 
          className={styles.subtitle} 
          style={{ color: 'white' }}
          >
          </h2>
        </div>
        <div className={styles.profileContainer}>
          <img
            src={imagePath} 
            alt="Photo de profil"
            className={styles.profilePhoto}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}