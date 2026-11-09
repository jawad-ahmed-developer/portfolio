import { useEffect, useRef, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { navItems } from '../../../data/navigation.js'
import { profile } from '../../../data/profile.js'
import useActiveSection from '../../../hooks/useActiveSection.js'
import styles from './Header.module.css'

// Defined outside the component so the array identity is stable across renders.
const sectionIds = navItems.map((item) => item.id)

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const activeId = useActiveSection(sectionIds)

  // Escape closes the mobile menu and returns focus to the toggle button.
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>

      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <a href="#home" className={styles.brand} onClick={closeMenu}>
            {profile.name}
          </a>

          <nav aria-label="Primary">
            <button
              type="button"
              ref={toggleRef}
              className={styles.toggle}
              aria-expanded={isMenuOpen}
              aria-controls="primary-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <FaXmark aria-hidden="true" />
              ) : (
                <FaBars aria-hidden="true" />
              )}
            </button>

            <ul
              id="primary-menu"
              className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={styles.link}
                    aria-current={activeId === item.id ? 'true' : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header