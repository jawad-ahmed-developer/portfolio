import styles from './Tag.module.css'

// Small label used for interests now, and for skills and project tech later.
function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>
}

export default Tag