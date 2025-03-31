import styles from '../src/styles/Cv.module.css';

export default function CvSection() {
  const imagePath = 'assets/images/cv.png';
  const pdfPath = 'assets/documents/CV.pdf';
  return (
    <section id="cv" className={styles.cvSection}>
      <div className={`container-right ${styles.cvContainer}`}>
        <h2>Mon CV</h2>
        <p>Vous pouvez consulter mon CV dès à présent</p>
        <a href={pdfPath} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
          <img 
            src={imagePath}
            alt="Icône de CV" 
            className={styles.cvImage}
          />
          <span>Télécharger le CV</span>
        </a>
      </div>
    </section>
  );
}