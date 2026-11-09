import styles from './Button.module.css'

// Renders a link when `href` is given, otherwise a real <button>.
// External links (http/https) open in a new tab safely.
function Button({ href, variant = 'primary', children, ...rest }) {
  const className = `${styles.button} ${styles[variant]}`

  if (href) {
    const isExternal = /^https?:\/\//.test(href)

    return (
      <a
        href={href}
        className={className}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button