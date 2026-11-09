export const profile = {
  name: 'Jawad Ahmed',
  title: 'Aspiring AI Engineer',
  // TODO: replace each null with your real value. Items stay hidden while null.
  email: 'jawad.soomro.pro@gmail.com', // e.g. 'name@example.com'
  github: 'https://github.com/jawad-ahmed-developer', // e.g. 'https://github.com/your-username'
  linkedin: 'https://www.linkedin.com/in/jawadahmedsoomro', // e.g. 'https://www.linkedin.com/in/your-username'
}

// Derived list used by <SocialLinks />. Entries without a value are dropped,
// so the site never renders a dead or made-up link.
export const socialLinks = [
  { id: 'github', label: 'GitHub', href: profile.github },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  {
    id: 'email',
    label: 'Email',
    href: profile.email ? `mailto:${profile.email}` : null,
  },
].filter((link) => link.href)