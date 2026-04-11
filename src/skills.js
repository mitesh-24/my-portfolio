const SKILLS = [
  { name: 'React', desc: 'Components, hooks, SPA patterns', icon: '⚛️' },
  { name: 'JavaScript', desc: 'ES6+, async, browser APIs', icon: '📜' },
  { name: 'HTML & CSS', desc: 'Semantic markup, responsive layout', icon: '🎨' },
  { name: 'Python', desc: 'Scripts, data, automation', icon: '🐍' },
  { name: 'Data & Viz', desc: 'Pandas, Matplotlib', icon: '📊' },
  { name: 'Git', desc: 'Version control & collaboration', icon: '🔀' },
];

function Skills() {
  return (
    <section id="skills" className="pf-section" aria-labelledby="skills-heading">
      <div className="pf-container">
        <span className="pf-section__label">Skills</span>
        <h2 id="skills-heading" className="pf-section__title">
          Tech I work with
        </h2>
        <p className="pf-section__lead">
          A practical stack for building web apps, analyzing data, and shipping ideas quickly.
        </p>
        <div className="pf-card-grid pf-card-grid--2 pf-card-grid--3">
          {SKILLS.map((s) => (
            <article key={s.name} className="pf-card pf-skill-card">
              <div className="pf-skill-card__icon" aria-hidden>
                {s.icon}
              </div>
              <h3 className="pf-skill-card__name">{s.name}</h3>
              <p className="pf-skill-card__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
