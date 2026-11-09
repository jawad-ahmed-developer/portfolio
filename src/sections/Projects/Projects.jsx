import Section from '../../components/ui/Section/Section.jsx'
import { projects } from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import styles from './Projects.module.css'

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className={styles.grid}>
        {projects.map((project) => (
          <li key={project.id} className={styles.item}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Projects