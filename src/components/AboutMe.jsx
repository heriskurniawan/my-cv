import { useEffect, useRef } from 'react'

const info = [
  { label: 'Full Name', value: 'Heris Kurniawan' },
  { label: 'Email', value: 'heris_kurniawan@yahoo.com' },
  { label: 'Location', value: 'Jakarta, Indonesia' },
  { label: 'Availability', value: 'Full-time / Freelance / Remote' },
]

export default function AboutMe() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 100)
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-grid">
          <div className="about-image fade-in-left">
            <div className="about-image-wrapper">
              <img
                src="/assets/img/myFoto.JPG"
                alt="Heris Kurniawan"
                className="about-image-photo"
              />
            </div>
            <div className="exp-badge">
              7+ <span>Years of<br />Experience</span>
            </div>
          </div>
          <div className="about-text fade-in-right">
            <h3>A passionate developer who loves building great products</h3>
            <p>
I am a result-oriented Programmer / Software Developer
with 7 years of experience in the full Software
Development Life Cycle (SDLC). Proficient in C#, .NET, and
JavaScript programming languages with hands-on
experience using Blazor and Syncfusion frameworks.
Skilled in [Agile/Scrum] methodologies and database
management (SQL/NoSQL).
            </p>
            <p>
              Contributed to the
development of Non-ERP applications that improved
internal operational efficiency by 25%. Seeking a mid-
level role where I can build scalable and innovative
solutions.
            </p>
            <div className="about-info">
              {info.map((item) => (
                <div className="about-info-item" key={item.label}>
                  <div>
                    <div className="label">{item.label}</div>
                    <div className="value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <i className="fas fa-comment" /> Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
