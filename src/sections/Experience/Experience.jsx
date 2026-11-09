import Section from '../../components/ui/Section/Section.jsx'
import { education, experience } from '../../data/experience.js'
import styles from './Experience.module.css'
import TimelineItem from './TimelineItem.jsx'

function Experience() {
  return (
    <Section id="experience" title="Experience and Education">
      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Experience</h3>
        <ol className={styles.list}>
          {experience.map((entry) => (
            <TimelineItem
              key={entry.id}
              title={entry.role}
              organization={entry.organization}
              meta={[entry.workMode, entry.period].filter(Boolean).join(' · ')}
              note={entry.note}
              highlights={entry.highlights}
            />
          ))}
        </ol>
      </div>

      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Education</h3>
        <ol className={styles.list}>
          {education.map((entry) => (
            <TimelineItem
              key={entry.id}
              title={entry.degree}
              organization={entry.institution}
              meta={entry.period}
            />
          ))}
        </ol>
      </div>
    </Section>
  )
}

export default Experience