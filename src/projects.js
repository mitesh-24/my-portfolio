const PROJECTS = [
  {
    title: 'Sales Data Analysis',
    description:
      'Analysis of sales data using Pandas for cleaning and preprocessing, with Matplotlib for clear visual summaries and charts.',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    liveUrl: '#projects',
    repoUrl: 'https://github.com',
  },
  {
    title: 'To-Do App',
    description:
      'A focused task list built with Vue.js, demonstrating component structure, state handling, and a simple, usable interface.',
    stack: ['Vue.js', 'JavaScript', 'CSS'],
    liveUrl: '#projects',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Car Counter',
    description:
      'A real-time vehicle counting concept using computer vision techniques—exploring detection pipelines and practical CV workflows.',
    stack: ['Python', 'OpenCV', 'Computer Vision'],
    liveUrl: '#projects',
    repoUrl: 'https://github.com',
  },
];

function Projects() {
  return (
    <section id="projects" className="pf-section" aria-labelledby="projects-heading">
      <div className="pf-container">
        <span className="pf-section__label">Projects</span>
        <h2 id="projects-heading" className="pf-section__title">
          Selected work
        </h2>
        <p className="pf-section__lead">Highlights from my portfolio, with stack tags and quick links.</p>
        <div className="pf-card-grid pf-card-grid--2 pf-card-grid--3">
          {PROJECTS.map((project) => (
            <article key={project.title} className="pf-card pf-project-card">
              <h3 className="pf-card__title">{project.title}</h3>
              <p className="pf-card__text">{project.description}</p>
              <div className="pf-pills">
                {project.stack.map((tag) => (
                  <span key={tag} className="pf-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pf-project-card__links">
                <a href={project.liveUrl} className="pf-link-out">
                  Live demo
                  <span aria-hidden> ↗</span>
                </a>
                <a href={project.repoUrl} className="pf-link-out">
                  GitHub
                  <span aria-hidden> ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
