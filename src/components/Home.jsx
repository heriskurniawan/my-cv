import { useState, useEffect } from 'react'

const roles = ['Frontend Developer', 'UI/UX Enthusiast', 'React Specialist', 'Creative Problem Solver']

export default function Home() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      }, 80)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      }, 40)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, index])

  return (
    <section id="home" className="home section">
      <div className="home-bg">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
      <div className="container">
        <div className="home-content">
          <div className="home-badge">
            <span className="dot" />
            Available for opportunities
          </div>
          <h1>
            Hi, I'm{' '}
            <span className="highlight">Heris Kurniawan</span>
          </h1>
          <div className="typing">
            {text}<span className="cursor" />
          </div>
          <p>
            I am a result-oriented Programmer / Software Developer
with 7 years of experience in the full Software
Development Life Cycle (SDLC). Proficient in C#, .NET, and
JavaScript programming languages with hands-on
experience using Blazor and Syncfusion frameworks.
Skilled in [Agile/Scrum] methodologies and database
management (SQL/NoSQL). Contributed to the
development of Non-ERP applications that improved
internal operational efficiency by 25%. Seeking a mid-
level role where I can build scalable and innovative
solutions.
          </p>
          <div className="home-buttons">
            <a href="#portfolio" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <i className="fas fa-eye" /> View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <i className="fas fa-envelope" /> Contact Me
            </a>
          </div>
          <div className="home-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
              <i className="fab fa-dribbble" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
