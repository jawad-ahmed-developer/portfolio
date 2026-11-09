export const profile = {
  name: 'Jawad Ahmed',
  title: 'Aspiring AI Engineer',
  intro:
    'BS Computer Science student at Sukkur IBA University, interested in building intelligent software: machine learning applications, LLM-based tools and the backend systems behind them.',
  // TODO (optional): see "Step 8" at the end of this phase to add a photo.
  photo: 'https://media.licdn.com/dms/image/v2/D5603AQFML51EaH4X3g/profile-displayphoto-scale_400_400/B56Zit6MTHG4Ak-/0/1755264371320?e=1795651200&v=beta&t=5m1qbuL-NZpQrFhXB2tAibQwwXNU-Iu5I_wFtLDzZ8E',
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