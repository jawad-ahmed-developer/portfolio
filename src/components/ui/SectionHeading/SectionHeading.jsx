import styles from './SectionHeading.module.css'

function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className={styles.title}>
      {children}
    </h2>
  )
}

export default SectionHeading