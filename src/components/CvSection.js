import styles from '../styles/Cv.module.css';

export default function CvSection() {
  return (
    <section id="cv" className={styles.cvSection}>
      <div className={`container-right ${styles.cvContainer}`}>
        <h2>Mon CV</h2>
        <p>Vous pouvez consulter mon CV dès à présent</p>
        <a href="/assets/documents/CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
          <img 
            src="/assets/images/cv.png" 
            alt="Icône de CV" 
            className={styles.cvImage}
          />
          <span>Télécharger le CV</span>
        </a>
      </div>
    </section>
  );
}