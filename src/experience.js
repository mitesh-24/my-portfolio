const STEPS = [
  {
    period: 'Ongoing',
    role: 'Building & learning',
    org: 'Personal growth',
    description:
      'Shipping small apps, experimenting with React and data tooling, and refining how I structure projects from scratch.',
  },
  {
    period: 'Recent',
    role: 'Project-based development',
    org: 'Academic & side projects',
    description:
      'Delivered data analysis work, a Vue to-do app, and computer-vision experiments—each with a clear problem statement and outcome.',
  },
  {
    period: 'Foundation',
    role: 'Core skills',
    org: 'Computer science & software basics',
    description:
      'Solid grounding in programming fundamentals, algorithms, and practical software engineering habits.',
  },
];

function Experience() {
  return (
    <section id="experience" className="pf-section" aria-labelledby="experience-heading">
      <div className="pf-container">
        <span className="pf-section__label">Journey</span>
        <h2 id="experience-heading" className="pf-section__title">
          Experience & path
        </h2>
        <p className="pf-section__lead">How I have grown as a developer, from foundations to what I am building now.</p>
        <div className="pf-timeline">
          {STEPS.map((step) => (
            <div key={step.period + step.role} className="pf-timeline__item">
              <p className="pf-timeline__period">{step.period}</p>
              <h3 className="pf-timeline__role">{step.role}</h3>
              <p className="pf-timeline__org">{step.org}</p>
              <p className="pf-timeline__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
