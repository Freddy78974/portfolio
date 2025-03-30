import styles from '../src/styles/Skills.module.css';

const skills = [
  { name: "HTML & CSS", url: "https://developer.mozilla.org/" },
  { name: "JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Golang", url: "https://go.dev/" },
  { name: "Rust", url: "https://www.rust-lang.org/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "SQL", url: "https://sql.sh/" },
  { name: "VsCode", url: "https://code.visualstudio.com/" },
  { name: "Docker", url: "https://www.docker.com/" },
  { name: "Git", url: "https://git-scm.com/" }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Compétences</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.skillItem}
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}