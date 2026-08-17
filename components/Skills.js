import styles from '../src/styles/Skills.module.css';
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

const skills = [
  { name: "HTML & CSS", url: "https://developer.mozilla.org/", icons: [SiHtml5, SiCss] },
  { name: "JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript", icons: [SiJavascript] },
  { name: "Node.js", url: "https://nodejs.org/", icons: [SiNodedotjs] },
  { name: "Next.js", url: "https://nextjs.org/", icons: [SiNextdotjs] },
  { name: "Golang", url: "https://go.dev/", icons: [SiGo] },
  { name: "Rust", url: "https://www.rust-lang.org/", icons: [SiRust] },
  { name: "Python", url: "https://www.python.org/", icons: [SiPython] },
  { name: "SQL", url: "https://sql.sh/", icons: [SiMysql] },
  { name: "VsCode", url: "https://code.visualstudio.com/", icons: [VscVscode] },
  { name: "Docker", url: "https://www.docker.com/", icons: [SiDocker] },
  { name: "Git", url: "https://git-scm.com/", icons: [SiGit] }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Compétences</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <a
              key={skill.name}
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
              <span className={styles.skillName}>{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}