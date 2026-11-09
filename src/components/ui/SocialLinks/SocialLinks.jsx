import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from './SocialLinks.module.css'

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
}

// Presentational only: receives `links` as [{ id, label, href }].
function SocialLinks({ links }) {
  if (links.length === 0) return null

  return (
    <ul className={styles.list}>
      {links.map(({ id, label, href }) => {
        const Icon = icons[id]
        if (!Icon) return null

        const isExternal = href.startsWith('http')

        return (
          <li key={id}>
            <a
              href={href}
              className={styles.link}
              aria-label={isExternal ? `${label} (opens in a new tab)` : label}
              {...(isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks