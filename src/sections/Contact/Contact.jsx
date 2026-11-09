import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import Button from '../../components/ui/Button/Button.jsx'
import Section from '../../components/ui/Section/Section.jsx'
import { profile } from '../../data/profile.js'
import styles from './Contact.module.css'

// No form: this site has no backend, so a form could not deliver anything.
// Only the contact methods that exist in profile.js are shown.
function Contact() {
  const { email, github, linkedin } = profile

  return (
    <Section id="contact" title="Contact">
      <div className={styles.card}>
        <p className={styles.text}>
          If you would like to talk about my projects or work together, you can
          reach me through the links below.
        </p>

        {email && <p className={styles.address}>{email}</p>}

        <div className={styles.actions}>
          {email && (
            <Button href={`mailto:${email}`}>
              <FaEnvelope aria-hidden="true" />
              Email me
            </Button>
          )}
          {github && (
            <Button
              href={github}
              variant="secondary"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </Button>
          )}
          {linkedin && (
            <Button
              href={linkedin}
              variant="secondary"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}

export default Contact