import styles from '../src/styles/Header.module.css';
import useTypingEffect from '../src/hooks/useTypingEffect';

const TITLE_TEXT = 'Bienvenue sur mon portfolio';
const SUBTITLE_TEXT = 'Développeur full stack\nJe m\'appelle Jean-Frédéric Nangy';

export default function Header() {
  const imagePath = 'assets/images/IMG_4674.jpg';

  useTypingEffect([
    { id: 'typing-effect-h1', text: TITLE_TEXT },
    { id: 'typing-effect-h2', text: SUBTITLE_TEXT }
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
            {TITLE_TEXT}
          </h1>
          <h2
          data-testid="typing-effect-h2"
          id="typing-effect-h2"
          className={styles.subtitle}
          style={{ color: 'white' }}
          >
            {SUBTITLE_TEXT}
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