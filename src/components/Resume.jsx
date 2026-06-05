import { useState, useEffect, useRef } from 'react'

const experiences = [
  {
    date: '2022 - Present',
    title: 'Senior .NET Developer',
    company: 'PT Sigma Cipta Utama',
    description: 'System Architecture: Designing highly scalable, secure, and resilient enterprise applications using microservices or clean architecture. Technical Leadership: Mentoring junior and mid-level developers, conducting rigorous code reviews, and establishing engineering best practices. Database Optimization: Designing complex data models and tuning performance for high-throughput databases (SQL and NoSQL). Strategic Decision-Making: Selecting the appropriate tech stack, libraries, and frameworks to meet long-term business goals. Security Compliance: Implementing advanced security protocols, data protection laws, and identity management systems like OAuth. Stakeholder Collaboration: Translating high-level business requirements from product owners into concrete technical roadmaps.',
  },
  {
    date: '2020 - 2021',
    title: 'Middle .NET Developer',
    company: 'PT Mastersystem Infotama',
    description: 'Code Development: Writing clean, scalable, and maintainable C# code for web, cloud, or desktop applications using .NET Core. API Integration: Designing and implementing RESTful APIs and microservices to connect different software systems. Database Management: Creating, optimizing, and managing databases using SQL Server, PostgreSQL, or Entity Framework Core. Testing & Debugging: Writing unit tests and troubleshooting software bugs to ensure application stability and performance. Code Reviews: Participating in code reviews to maintain high-quality code standards across the development team. System Architecture: Assisting senior engineers in designing software architecture and choosing the right tech stack. Version Control',
  },
  {
    date: '2018 - 2019',
    title: 'Junior .NET Developer',
    company: 'PT Iforce Counsulting Indonesia',
    description: 'Developed and implemented user-friendly web-based applications for a variety of clients, Designed and maintained multiple websites using HTML, CSS, JavaScript, JQuery and other web technologies. Collaborated with cross-functional teams to create engaging, responsive web pages. Developed interactive web page prototypes to quickly and accurately demonstrate functionality. Developed and maintained various web-based applications using .NET, SQL Server, and AJAX.',
  },
]

const education = [
  {
    date: '2013 - 2017',
    title: 'Bachelor of Technology Information',
    company: 'University of Islmaic Attahiriyah - Jakarta',
    description: 'Graduated with honors. Specialized in software engineering and web technologies',
  }
]

const skills = [
  { name: '.NET Core / .NET 8 / MVC', icon: 'fab fa-code', level: 95 },
  { name: 'Blazor', icon: 'fab fa-windows', level: 95 },
  { name: 'JavaScript', icon: 'fab fa-js', level: 90 },
  { name: 'TypeScript', icon: 'fas fa-code', level: 85 },
  { name: 'HTML/CSS', icon: 'fab fa-html5', level: 95 },
  { name: 'Syncfusion', icon: 'fas fa-puzzle-piece', level: 85 },
  { name: 'Git', icon: 'fab fa-git-alt', level: 85 },
  { name: 'SQL Query', icon: 'fas fa-database', level: 80 },
  { name: 'Scrum', icon: 'fas fa-users-cog', level: 65 },
  { name: 'Agile', icon: 'fas fa-chart-line', level: 60 },
]

export default function Resume() {
  const [tab, setTab] = useState('experience')
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

  const items = tab === 'experience' ? experiences : education

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">My experience & qualifications</p>
        </div>

        <div className="resume-tabs fade-in">
          {['experience', 'education', 'skills'].map((t) => (
            <button
              key={t}
              className={`resume-tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'experience' && <><i className="fas fa-briefcase" /> Experience</>}
              {t === 'education' && <><i className="fas fa-graduation-cap" /> Education</>}
              {t === 'skills' && <><i className="fas fa-cogs" /> Skills</>}
            </button>
          ))}
        </div>

        {tab !== 'skills' ? (
          <div className="timeline">
            {items.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className={`timeline-dot${i === 0 ? ' current' : ''}`} />
                <div className="timeline-card">
                  <span className="date">{item.date}</span>
                  <h4>{item.title}</h4>
                  <div className="company">{item.company}</div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div className="skill-item" key={i}>
                <i className={skill.icon} />
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
