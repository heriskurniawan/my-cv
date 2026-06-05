import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
            &lt;CV /&gt;
          </a>
          <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`navbar-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className={`navbar-overlay${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)} />
    </>
  )
}
