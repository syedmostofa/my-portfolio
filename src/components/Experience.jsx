import { RiMapPinLine, RiCalendarLine, RiBriefcaseLine } from 'react-icons/ri';
import './Experience.css';

const experiences = [
  {
    role:        'Founder & CEO',
    company:     'IntelliGency Solutions',
    location:    'Northville, MI, USA',
    type:        'Full-time',
    period:      'March 2024 — Present',
    current:     true,
    description: 'Brief overview of my role and the impact I made at this company.',
    bullets: [
      'Helped healthcare practices increase patient bookings by 20–40% through conversion-focused websites, SEO, and paid media systems.',
      'Improved collections performance by 15–25% via cleaner claims, denial reduction workflows, and RCM optimization.',
      'Led strategy, sales, delivery, and operations as a solo founder, managing end-to-end client lifecycle from lead acquisition to retention.',
    ],
    tags: ['Figma', 'Notion', 'Ahrefs', 'eClinicalWorks'],
  },
  {
    role:        'Project & Operations Manager',
    company:     'Roast My App LLC',
    location:    'Cheyenne, WY, USA',
    type:        'Contract',
    period:      'Jan 2026 — Present',
    current:     true,
    description: 'Brief overview of my role and the impact I made at this company.',
    bullets: [
      'Managed cross-functional delivery for UX/UI audit sprints, improving activation and conversion metrics for client apps.',
      'Streamlined project workflows, reducing turnaround time by ~20%.',
      'Translated growth research into actionable UX recommendations tied directly to revenue and retention.',
    ],
    tags: ['Appmagic', 'Screensdesign', 'Figma', 'REST APIs'],
  },
  {
    role:        'Project Management Intern',
    company:     'MetaOption LLC',
    location:    'New York City, NY, USA',
    type:        'Part-time',
    period:      'Dec 2020 — February 2021',
    current:     false,
    description: 'Brief overview of my role and the impact I made at this company.',
    bullets: [
      'Supported project planning and execution for client deliverables, coordinating across multiple stakeholder groups',
      'Assisted in developing project timelines and tracking key milestones to ensure on-time delivery of all project phases',
      'Contributed to process improvement initiatives that streamlined internal workflows and enhanced team productivity',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Notion'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey so far — the roles, teams, and problems that shaped how I build.
        </p>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className={`timeline__item ${exp.current ? 'timeline__item--current' : ''}`}>

              {/* Timeline spine */}
              <div className="timeline__spine">
                <div className="timeline__dot" />
                {i < experiences.length - 1 && <div className="timeline__line" />}
              </div>

              {/* Card */}
              <div className="timeline__card">

                {/* Card top */}
                <div className="timeline__card-top">
                  <div className="timeline__card-left">
                    <div className="timeline__role-row">
                      <h3 className="timeline__role">{exp.role}</h3>
                      {exp.current && (
                        <span className="timeline__current-badge">Current</span>
                      )}
                    </div>
                    <p className="timeline__company">
                      <RiBriefcaseLine size={14} />
                      {exp.company}
                    </p>
                  </div>

                  <div className="timeline__card-right">
                    <span className="timeline__meta">
                      <RiCalendarLine size={13} />
                      {exp.period}
                    </span>
                    <span className="timeline__meta">
                      <RiMapPinLine size={13} />
                      {exp.location}
                    </span>
                    <span className="timeline__type">{exp.type}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="timeline__description">{exp.description}</p>

                {/* Bullets */}
                <ul className="timeline__bullets">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="timeline__bullet">{b}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="timeline__tags">
                  {exp.tags.map(tag => (
                    <span key={tag} className="timeline__tag">{tag}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}