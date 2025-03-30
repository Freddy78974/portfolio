import styles from '../src/styles/Footer.module.css';

const Footer = () => {
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
              src="/assets/images/github-mark-white.png" 
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
              src="/assets/images/Gitea-Logo.wine.png" 
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