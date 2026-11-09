import { navItems } from '../../../data/navigation.js'
import { profile, socialLinks } from '../../../data/profile.js'
import SocialLinks from '../../ui/SocialLinks/SocialLinks.jsx'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          &copy; {year} {profile.name}. All rights reserved.
        </p>

        <nav aria-label="Footer">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  )
}

export default Footer