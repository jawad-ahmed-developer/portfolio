import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import Section from './components/ui/Section/Section.jsx'
import { navItems } from './data/navigation.js'
import About from './sections/About/About.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Projects from './sections/Projects/Projects.jsx'
import Skills from './sections/Skills/Skills.jsx'

// Sections still waiting for a real component (removed one by one in Phase 4).
const builtIds = ['home', 'about', 'skills', 'projects']
const placeholderSections = navItems.filter((item) => !builtIds.includes(item.id))

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* TEMPORARY placeholders */}
        {placeholderSections.map((item) => (
          <Section key={item.id} id={item.id} title={item.label}>
            <p style={{ minHeight: '50vh' }}>
              Placeholder for the {item.label} section.
            </p>
          </Section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App