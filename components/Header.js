import styles from '../src/styles/Header.module.css';
import useTypingEffect from '../src/hooks/useTypingEffect';
import projects from '../src/data/projects';

const LINE_1 = 'jean-frederic-nangy — développeur full stack';
const LINE_2 = 'formé à Zone01 Normandie · disponible pour de nouveaux projets';

export default function Header() {
  const pdfPath = 'assets/documents/CV.pdf';

  useTypingEffect([
    { id: 'term-line-1', text: LINE_1 },
    { id: 'term-line-2', text: LINE_2 }
  ], 30);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className="eyebrow">disponible pour de nouveaux projets</p>
          <h1 className={styles.headline}>
            Développeur full stack,<br />
            <span className={styles.accentWord}>du terminal à la prod.</span>
          </h1>
          <p className={styles.sub}>
            <strong>Jean-Frédéric Nangy</strong>, formé à Zone01 Normandie. J&apos;assemble des
            systèmes complets : API, données, interface, déploiement.
          </p>
          <div className={styles.ctas}>
            {projects.length > 0 && (
              <a href="#projects" className={`${styles.cta} ${styles.ctaPrimary}`}>→ Voir les projets</a>
            )}
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className={projects.length > 0 ? styles.cta : `${styles.cta} ${styles.ctaPrimary}`}
            >
              Télécharger le CV
            </a>
            <a href="#contact" className={styles.cta}>Me contacter</a>
          </div>
        </div>

        <div className={styles.term}>
          <div className={styles.termBar}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.termTitle}>jean-frederic@portfolio — zsh</span>
          </div>
          <div className={styles.termBody}>
            <div>
              <span className={styles.prompt}>visiteur@portfolio ~ %</span>{' '}
              <span className={styles.cmd}>whoami</span>
            </div>
            <div className={styles.out} id="term-line-1">{LINE_1}</div>
            <div>
              <span className={styles.prompt}>visiteur@portfolio ~ %</span>{' '}
              <span className={styles.cmd}>cat statut.txt</span>
            </div>
            <div className={styles.out} id="term-line-2">{LINE_2}</div>
            <div>
              <span className={styles.prompt}>visiteur@portfolio ~ %</span>{' '}
              <span className={styles.cursor}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
