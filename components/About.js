import useScrollAnimation from '../src/hooks/useScrollAnimation';
import styles from '../src/styles/About.module.css';

export default function About() {
  useScrollAnimation('.container-left, .container-right', 0.1);

  return (
    <section id="description">
      <div className="container-left">
        <div className={styles.container}>
          <h2 className={styles.title}>Qui suis-je ?</h2>
          <div className={styles.content}>
            <p>Je suis un développeur full stack passionné par la création de projets divers.</p>
            <p>J'ai toujours été intéressé par les ordinateurs et la programmation.</p>
            <p>J'ai commencé à coder il y a 2 ans lorsque j'ai intégré l'école Zone01, j'ai travaillé sur de nombreux projets depuis.</p>
            <p>Je sais m'adapter à différents langages de programmation que ce soit en back-end ou en front-end.</p>
          </div>
        </div>
      </div>
    </section>
  );
}