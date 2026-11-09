import Section from '../../components/ui/Section/Section.jsx'
import { skillGroups } from '../../data/skills.js'
import SkillGroup from './SkillGroup.jsx'
import styles from './Skills.module.css'

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className={styles.intro}>Technologies I work with, grouped by area.</p>
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} {...group} />
        ))}
      </div>
    </Section>
  )
}

export default Skills