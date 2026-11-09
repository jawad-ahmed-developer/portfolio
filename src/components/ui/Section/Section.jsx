import SectionHeading from '../SectionHeading/SectionHeading.jsx'
import styles from './Section.module.css'

// Wrapper every page section uses: provides the <section id>, the page-width
// container, vertical rhythm, and an accessible heading.
function Section({ id, title, ariaLabel, children }) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      className={styles.section}
      aria-labelledby={title ? headingId : undefined}
      aria-label={title ? undefined : ariaLabel}
    >
      <div className="container">
        {title && <SectionHeading id={headingId}>{title}</SectionHeading>}
        {children}
      </div>
    </section>
  )
}

export default Section