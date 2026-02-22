import { useState } from 'react';
import {
  RiMailLine, RiLinkedinFill, RiGithubFill,
  RiMapPinLine, RiSendPlaneLine, RiCheckLine,
} from 'react-icons/ri';
import './Contact.css';

const contactInfo = [
  {
    icon:  <RiMailLine size={20} />,
    label: 'Email',
    value: 'syed@intelligencysolutions.com',
    href:  'mailto:syed@intelligencysolutions.com',
  },
  {
    icon:  <RiLinkedinFill size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/smostofamoosa/',
    href:  'https://www.linkedin.com/in/smostofamoosa/',
  },
  {
    icon:  <RiMapPinLine size={20} />,
    label: 'Location',
    value: 'Sylhet & Northville',
    href:  null,
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // This currently just simulates submission.
  // In Step 7 we'll wire it up to a real service like EmailJS or Formspree.
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>

        <div className="contact__grid">

          {/* Left — Info */}
          <div className="contact__info">
            <p className="contact__info-text">
              I'm currently open to new projects — whether it's a patient acquisition strategy, medical practice website, or digital marketing for doctors. Feel free to
              reach out through any of the channels below.
            </p>

            <div className="contact__links">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__link-item">
                  <div className="contact__link-icon">{item.icon}</div>
                  <div className="contact__link-body">
                    <span className="contact__link-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact__link-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__link-value contact__link-value--static">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <RiCheckLine size={28} />
                </div>
                <h3 className="contact__success-title">Message sent!</h3>
                <p className="contact__success-text">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="contact__submit" disabled={loading}>
                  {loading ? (
                    <span className="contact__spinner" />
                  ) : (
                    <>
                      <RiSendPlaneLine size={17} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}