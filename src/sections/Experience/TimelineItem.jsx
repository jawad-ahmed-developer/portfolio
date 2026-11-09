import styles from './Experience.module.css'

// One entry on the timeline. Used for both experience and education.
// Optional props (meta, note, highlights) render nothing when empty.
function TimelineItem({ title, organization, meta, note, highlights = [] }) {
  return (
    <li className={styles.item}>
      <h4 className={styles.itemTitle}>{title}</h4>
      <p className={styles.organization}>{organization}</p>
      {meta && <p className={styles.meta}>{meta}</p>}

      {note && (
        <p className={styles.note}>
          <strong>Note:</strong> {note}
        </p>
      )}

      {highlights.length > 0 && (
        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default TimelineItem