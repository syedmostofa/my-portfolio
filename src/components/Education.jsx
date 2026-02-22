import { RiMapPinLine, RiCalendarLine, RiMedalLine } from 'react-icons/ri';
import './Education.css';

const educations = [
  {
    degree:      'Bachelor of Science in Computer Science & Engineering',
    institution: 'Metropolitan University, Bangladesh',
    location:    'Sylhet, Bangladesh',
    period:      '2023 — 2026',
    grade:       'GPA: 3.2 / 4.0',
    description: 'Brief description of my studies, focus areas, and probable thesis topic.',
    highlights: [
      'Relevant coursework: Data Structures, Algorithms Design & Analysis, Artificial Intelligence, Web Development & Project.',
      'Probable Final year thesis: "Using ML Techniques to evaluate UI Components."',
      'Active member of the university Islamic Society',
    ],
    tags: ['Computer Science', 'Algorithms', 'Software Engineering'],
  },
  {
    degree:      'International A Levels',
    institution: 'Anandaniketan',
    location:    'Sylhet, Bangladesh',
    period:      '2014 — 2016',
    grade:       'GPA: 4.0 / 4.0',
    description: 'Science group with a focus on Mathematics',
    highlights: [
      'Graduated with distinction.',
      'Participated in inter-college debate competitions.',
    ],
    tags: ['Science', 'Mathematics', 'Physics'],
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <p className="section-label">My background</p>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          The academic foundations that set me on this path.
        </p>

        <div className="edu__list">
          {educations.map((edu, i) => (
            <div key={i} className="edu__card">

              {/* Left accent bar */}
              <div className="edu__accent-bar" />

              <div className="edu__body">
                {/* Top row */}
                <div className="edu__top">
                  <div>
                    <h3 className="edu__degree">{edu.degree}</h3>
                    <p className="edu__institution">
                      <RiMedalLine size={14} />
                      {edu.institution}
                    </p>
                  </div>
                  <div className="edu__meta-group">
                    <span className="edu__meta">
                      <RiCalendarLine size={13} />
                      {edu.period}
                    </span>
                    <span className="edu__meta">
                      <RiMapPinLine size={13} />
                      {edu.location}
                    </span>
                    <span className="edu__grade">{edu.grade}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="edu__description">{edu.description}</p>

                {/* Highlights */}
                <ul className="edu__highlights">
                  {edu.highlights.map((h, hi) => (
                    <li key={hi} className="edu__highlight">{h}</li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="edu__tags">
                  {edu.tags.map(tag => (
                    <span key={tag} className="edu__tag">{tag}</span>
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