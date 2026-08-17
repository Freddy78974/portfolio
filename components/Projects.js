import styles from '../src/styles/Projects.module.css';
import projects from '../src/data/projects';

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projets</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.name} className={styles.projectCard}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.projectImage}
                />
              )}
              <div className={styles.projectContent}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <ul className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <li key={tag} className={styles.projectTag}>{tag}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.projectLinks}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Démo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Code source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
