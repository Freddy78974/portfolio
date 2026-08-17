import styles from '../src/styles/Footer.module.css';
import { HiOutlineMail } from 'react-icons/hi';
import { HiArrowUp } from 'react-icons/hi2';

const Footer = () => {
  const githubIconPath = 'assets/images/github-mark-white.png';
  const giteaIconPath = 'assets/images/Gitea-Logo.wine.png';
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
              src={githubIconPath}
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
              src={giteaIconPath}
              alt="Gitea"
              className={styles.socialIcon}
            />
            Gitea
          </a>
          <a
            href="mailto:nangy.pro@gmail.com"
            className={styles.socialLink}
          >
            <HiOutlineMail className={styles.socialIconSvg} aria-hidden="true" />
            Email
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Jean-Frédéric Nangy - Tous droits réservés
        </p>
        <a href="#top" className={styles.backToTop} aria-label="Retour en haut de page">
          <HiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;