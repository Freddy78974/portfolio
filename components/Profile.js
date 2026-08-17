import styles from '../src/styles/Profile.module.css';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiGo,
  SiRust,
  SiPython,
  SiMysql,
  SiDocker,
  SiGit
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    label: 'Front-end',
    skills: [
      { name: 'HTML & CSS', url: 'https://developer.mozilla.org/', icons: [SiHtml5, SiCss] },
      { name: 'JavaScript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript', icons: [SiJavascript] },
      { name: 'Next.js', url: 'https://nextjs.org/', icons: [SiNextdotjs] }
    ]
  },
  {
    label: 'Back-end',
    skills: [
      { name: 'Node.js', url: 'https://nodejs.org/', icons: [SiNodedotjs] },
      { name: 'Golang', url: 'https://go.dev/', icons: [SiGo] },
      { name: 'Rust', url: 'https://www.rust-lang.org/', icons: [SiRust] },
      { name: 'Python', url: 'https://www.python.org/', icons: [SiPython] }
    ]
  },
  {
    label: 'Données',
    skills: [
      { name: 'SQL', url: 'https://sql.sh/', icons: [SiMysql] }
    ]
  },
  {
    label: 'Outils',
    skills: [
      { name: 'VsCode', url: 'https://code.visualstudio.com/', icons: [VscVscode] },
      { name: 'Docker', url: 'https://www.docker.com/', icons: [SiDocker] },
      { name: 'Git', url: 'https://git-scm.com/', icons: [SiGit] }
    ]
  }
];

export default function Profile() {
  return (
    <section id="profil" className={`${styles.profile} reveal`}>
      <div className={styles.container}>
        <div className={styles.bio}>
          <p className="eyebrow">qui suis-je ?</p>
          <h2 className={styles.title}>Jean-Frédéric Nangy</h2>
          <div className={styles.bioText}>
            <p>Développeur full stack passionné par la création de projets divers.</p>
            <p>J&apos;ai toujours été intéressé par les ordinateurs et la programmation.</p>
            <p>J&apos;ai commencé à coder il y a 2 ans en intégrant l&apos;école Zone01 Normandie, et j&apos;ai travaillé sur de nombreux projets depuis.</p>
            <p>Je sais m&apos;adapter à différents langages de programmation, aussi bien en back-end qu&apos;en front-end.</p>
          </div>
          <img
            src="assets/images/IMG_4674.jpg"
            alt="Photo de Jean-Frédéric Nangy"
            className={styles.photo}
            loading="lazy"
          />
        </div>

        <div id="skills" className={styles.skills}>
          <div className={styles.skillsHead}>
            <h3 className={styles.skillsTitle}>Compétences</h3>
            <span className={styles.skillsNote}>11 technologies · classées par usage</span>
          </div>
          <dl className={styles.specGrid}>
            {skillCategories.map((category) => (
              <div key={category.label} className={styles.spec}>
                <dt>{category.label}</dt>
                <dd>
                  <ul>
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <a
                          href={skill.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.skillItem}
                          data-testid="skill-item"
                        >
                          <span className={styles.skillIcons} aria-hidden="true">
                            {skill.icons.map((Icon, i) => (
                              <Icon key={i} className={styles.skillIcon} />
                            ))}
                          </span>
                          <span>{skill.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
