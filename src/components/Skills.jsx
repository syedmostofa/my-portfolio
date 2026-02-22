import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React',       level: 60 },
      { name: 'JavaScript',  level: 80 },
      { name: 'Vite',  level: 75 },
      { name: 'HTML & CSS',  level: 95 },
      { name: 'Tailwind',    level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',     level: 80 },
      { name: 'Express',     level: 65 },
      { name: 'Python',      level: 80 },
      { name: 'REST APIs',   level: 85 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL',  level: 70 },
      { name: 'MongoDB',     level: 65 },
      { name: 'MySQL',       level: 75 },
      { name: 'Redis',       level: 55 },
      { name: 'Supabase',    level: 65 },
    ],
  },
  {
    category: 'Marketing & Growth',
    icon: '📢',
    skills: [
      { name: 'Social Media Management', level: 90 },
      { name: 'Content Marketing',       level: 85 },
      { name: 'Search Engine Optimization',        level: 70 },
      { name: 'Figma',        level: 60 },
      { name: 'Google My Business',          level: 55 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="skill-bar" style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ '--fill-width': `${level}%`, animationDelay: `${delay + 200}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          A snapshot of the tools and technologies I use to bring ideas to life.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skills__card">
              <div className="skills__card-header">
                <span className="skills__card-icon">{group.icon}</span>
                <h3 className="skills__card-title">{group.category}</h3>
              </div>
              <div className="skills__card-body">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 100 + si * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}