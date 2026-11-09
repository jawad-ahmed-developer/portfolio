import { FaChartLine, FaDesktop, FaGithub, FaTerminal } from 'react-icons/fa'
import Button from '../../components/ui/Button/Button.jsx'
import Tag from '../../components/ui/Tag/Tag.jsx'
import styles from './ProjectCard.module.css'

const mediaIcons = {
  ml: FaChartLine,
  desktop: FaDesktop,
  terminal: FaTerminal,
}

// Presentational: receives one project object (shape documented in
// src/data/projects.js). Optional parts are simply not rendered when empty.
function ProjectCard({ project }) {
  const {
    title,
    category,
    icon,
    status,
    description,
    tech,
    repoUrl,
    detailsUrl,
    image,
    imageAlt,
  } = project

  const Icon = mediaIcons[icon]

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {image ? (
          <img src={image} alt={imageAlt} className={styles.image} />
        ) : (
          Icon && <Icon className={styles.placeholderIcon} aria-hidden="true" />
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          {status && <span className={styles.status}>{status}</span>}
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.tech} aria-label="Technologies used">
          {tech.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>

        {(repoUrl || detailsUrl) && (
          <div className={styles.actions}>
            {repoUrl && (
              <Button
                href={repoUrl}
                variant="secondary"
                aria-label={`${title} on GitHub (opens in a new tab)`}
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </Button>
            )}
            {detailsUrl && (
              <Button href={detailsUrl} variant="secondary">
                Details
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard