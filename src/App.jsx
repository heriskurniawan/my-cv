import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Home />
        <AboutMe />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} My CV. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
