import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import Section from './components/ui/Section/Section.jsx'
import { navItems } from './data/navigation.js'

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* TEMPORARY: placeholder sections so we can test navigation.
            Each one is replaced by a real section component in Phase 4. */}
        {navItems.map((item) => (
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