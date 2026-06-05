import { useState, useEffect, useRef } from 'react'

const contactInfo = [
  { icon: 'fas fa-envelope', title: 'Email', value: 'heris_kurniawan@yahoo.com' },
  { icon: 'fas fa-phone', title: 'Phone', value: '+62 838 1130 1484' },
  { icon: 'fas fa-map-marker-alt', title: 'Location', value: 'Jakarta, Indonesia' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's work together</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-list fade-in-left">
            {contactInfo.map((item, i) => (
              <div className="contact-info-item" key={i}>
                <div className="icon">
                  <i className={item.icon} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <form className="contact-form fade-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {sent ? <><i className="fas fa-check" /> Message Sent!</> : <><i className="fas fa-paper-plane" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
