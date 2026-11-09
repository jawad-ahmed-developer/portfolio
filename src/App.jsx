import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import About from './sections/About/About.jsx'
import Contact from './sections/Contact/Contact.jsx'
import Experience from './sections/Experience/Experience.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Projects from './sections/Projects/Projects.jsx'
import Skills from './sections/Skills/Skills.jsx'

function App() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App