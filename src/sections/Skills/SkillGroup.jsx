import Tag from '../../components/ui/Tag/Tag.jsx'
import styles from './Skills.module.css'

function SkillGroup({ title, skills }) {
  return (
    <article className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <ul className={styles.tagList}>
        {skills.map((skill) => (
          <li key={skill}>
            <Tag>{skill}</Tag>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillGroup