import Section from '../../components/ui/Section/Section.jsx'
import Tag from '../../components/ui/Tag/Tag.jsx'
import { about } from '../../data/about.js'
import styles from './About.module.css'

function About() {
  return (
    <Section id="about" title="About">
      <div className={styles.layout}>
        <div className={styles.text}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside
          className={styles.interests}
          aria-labelledby="about-interests-heading"
        >
          <h3 id="about-interests-heading" className={styles.interestsTitle}>
            Areas of interest
          </h3>
          <ul className={styles.tagList}>
            {about.interests.map((interest) => (
              <li key={interest}>
                <Tag>{interest}</Tag>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  )
}

export default About