import styles from '../src/styles/Profile.module.css';
import {
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiClaude,
  SiFlutter,
  SiFirebase,
  SiPwa,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiCloudflare,
  SiLinux,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiDocker,
  SiKalilinux
} from 'react-icons/si';
import { RiOpenaiFill } from 'react-icons/ri';

const skillCategories = [
  {
    label: 'Architecture & Backend',
    skills: [
      { name: 'Node.js', url: 'https://nodejs.org/', icons: [SiNodedotjs] },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/', icons: [SiTypescript] },
      { name: 'Git', url: 'https://git-scm.com/', icons: [SiGit] },
      { name: 'GitHub', url: 'https://github.com/', icons: [SiGithub] }
    ]
  },
  {
    label: 'IA & ingénierie assistée',
    skills: [
      { name: 'Claude Code', url: 'https://claude.com/claude-code', icons: [SiClaude] },
      { name: 'ChatGPT', url: 'https://chatgpt.com/', icons: [RiOpenaiFill] }
    ]
  },
  {
    label: 'Produit multiplateforme',
    skills: [
      { name: 'Flutter', url: 'https://flutter.dev/', icons: [SiFlutter] },
      { name: 'Firebase', url: 'https://firebase.google.com/', icons: [SiFirebase] },
      { name: 'PWA', url: 'https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps', icons: [SiPwa] }
    ]
  },
  {
    label: 'Infrastructure & données',
    skills: [
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icons: [SiPostgresql] },
      { name: 'Redis', url: 'https://redis.io/', icons: [SiRedis] },
      { name: 'GitHub Actions', url: 'https://github.com/features/actions', icons: [SiGithubactions] },
      { name: 'Cloudflare R2', url: 'https://www.cloudflare.com/developer-platform/products/r2/', icons: [SiCloudflare] },
      { name: 'Linux', url: 'https://www.linux.org/', icons: [SiLinux] }
    ]
  }
];

const learning = [
  { name: 'Python', icons: [SiPython] },
  { name: 'Machine Learning', icons: [] },
  { name: 'TensorFlow', icons: [SiTensorflow] },
  { name: 'PyTorch', icons: [SiPytorch] },
  { name: 'Apache Kafka', icons: [SiApachekafka] },
  { name: 'Apache Spark', icons: [SiApachespark] },
  { name: 'Apache Airflow', icons: [SiApacheairflow] },
  { name: 'Docker', icons: [SiDocker] },
  { name: 'Cybersécurité (fondamentaux)', icons: [SiKalilinux] }
];

export default function Profile() {
  return (
    <section id="profil" className={`${styles.profile} reveal`}>
      <div className={styles.container}>
        <div className={styles.bio}>
          <p className="eyebrow">qui suis-je ?</p>
          <h2 className={styles.title}>Jean-Frédéric Nangy</h2>
          <div className={styles.bioText}>
            <p>Je me situe à l&apos;intersection de la conception de logiciels, de l&apos;architecture logicielle, du design de produits numériques et de l&apos;intelligence artificielle.</p>
            <p>Je pars d&apos;un besoin, je conçois une solution, je définis son architecture, puis je conduis son développement avec l&apos;aide d&apos;outils d&apos;IA comme Claude Code — utilisés comme de véritables outils d&apos;ingénierie, pas seulement pour générer du code.</p>
            <p>Formé à Zone01 Normandie, j&apos;ai travaillé sur plusieurs projets concrets : de la conception d&apos;une architecture modulaire à la mise en production d&apos;applications multiplateformes.</p>
            <p>Je documente mes décisions techniques et je reste honnête sur mon niveau : certaines compétences sont maîtrisées, d&apos;autres encore en cours d&apos;apprentissage.</p>
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
            <span className={styles.skillsNote}>par domaine de pratique</span>
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

          <div className={styles.learning}>
            <h4 className={styles.learningTitle}>En cours d&apos;apprentissage</h4>
            <ul className={styles.learningList}>
              {learning.map((item) => (
                <li key={item.name} className={styles.learningChip}>
                  {item.icons.map((Icon, i) => (
                    <Icon key={i} className={styles.learningIcon} aria-hidden="true" />
                  ))}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
