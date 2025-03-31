import styles from '../src/styles/Footer.module.css';

const Footer = () => {
  const imagePath = 'assets/images/github-mark-white.png';
  const imagePath2 = 'assets/images/Gitea-Logo.wine.png';
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/Freddy78974" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img 
              src={imagePath}
              alt="GitHub" 
              className={styles.socialIcon}
            />
            GitHub
          </a>
          <a 
            href="https://zone01normandie.org/git/njeanfre" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img 
              src={imagePath2}
              alt="Gitea" 
              className={styles.socialIcon}
            />
            Gitea
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Mon Portfolio - Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;