import Button from '../../components/ui/Button/Button.jsx'
import Section from '../../components/ui/Section/Section.jsx'
import SocialLinks from '../../components/ui/SocialLinks/SocialLinks.jsx'
import { profile, socialLinks } from '../../data/profile.js'
import styles from './Hero.module.css'

// "Jawad Ahmed" -> "JA"
const initials = profile.name
  .split(' ')
  .map((word) => word[0])
  .join('')

function Hero() {
  return (
    <Section id="home" ariaLabel="Introduction">
      <div className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Hello, I&apos;m</p>
          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.actions}>
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>

          <div className={styles.social}>
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        <div className={styles.visual}>
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              className={styles.photo}
            />
          ) : (
            // Decorative: the name is already announced by the <h1>.
            <div className={styles.monogram} aria-hidden="true">
              {initials}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Hero