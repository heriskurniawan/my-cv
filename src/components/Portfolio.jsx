import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Icofr Management System (IMS)',
    tag: 'Mobile App',
    description: 'An internal control system specifically designed to ensure that financial statements prepared by the company are accurate, complete, transparent, and compliant with applicable accounting standards.',
    tech: ['.NET MAUI', 'Balzor', 'SQL Server', 'Rest Api'],
    image: '/assets/img/portfolio_ims.jpeg',
    link: '#',
  },
  {
    title: 'Grant Management System Dashboard',
    tag: 'App',
    description: 'The Grant Management System (GMS) application is a web-based application used to manage the receipt of grants.',
    tech: ['.NET 8', 'Blazor', 'Syncfusion', 'SQL Server'],
      image: '/assets/img/portfolio_gms.jpeg',
    link: '#',
  },
  {
    title: 'Visitor Logbook',
    tag: 'Web App',
    description: 'The Visitor Logbook application is a guestbook application and is used for booking meetings online.',
    tech: ['.NET 6', 'Blazor Server', 'Javascript', 'Mudblazor'],
         image: '/assets/img/portfolio_visitor.jpeg',
    link: '#',
  },
  {
    title: 'Integrated Bank System (IBS)',
    tag: 'Full Stack',
    description: 'The Integrated Bank System application is a trade finance application for processing business transactions such as letters of credit, bank guarantees, claims, etc.',
    tech: ['.NET 8', 'Syncfusion', 'Blazor', 'SQL Server'],
           image: '/assets/img/portfolio_ibs.jpeg',
    link: '#',
  },
  {
    title: 'Corporate Administration System (CAS)',
    tag: 'Web App',
    description: 'The Corporate Administration System application is an application for managing BOD/BOC data, active terms of office, notary deeds, and shareholder resolutions.',
    tech: ['.NET 8', 'Syncfusion', 'Blazor', 'SQL Server'],
        image: '/assets/img/portfolio_cas.jpeg',
    link: '#',
  },
  {
    title: 'Investor Relation Hub',
    tag: 'Web App',
    description: 'The Investor Relations Hub application is an application for managing investor data and recording shareholders and bondholders.',
      tech: ['.NET 8', 'Syncfusion', 'Blazor', 'SQL Server'],
        image: '/assets/img/portfolio_irh.jpeg',
    link: '#',
  },
]

export default function Portfolio() {
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
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Featured projects I've worked on</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <div className="portfolio-card fade-in" key={i}>
              <div className="portfolio-card-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="portfolio-card-photo" />
                ) : (
                  <span className="portfolio-card-placeholder">{project.title.charAt(0)}</span>
                )}
                <div className="overlay">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="portfolio-card-body">
                <span className="tag">{project.tag}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, j) => (
                    <span key={j}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
