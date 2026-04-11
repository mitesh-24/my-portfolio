function About() {
  return (
    <section id="about" className="pf-section" aria-labelledby="about-heading">
      <div className="pf-container">
        <span className="pf-section__label">About</span>
        <h2 id="about-heading" className="pf-section__title">
          A little about me
        </h2>
        <p className="pf-section__lead">
          I am a passionate developer who enjoys building useful products, learning new tools, and
          collaborating with others to ship quality software.
        </p>
        <div className="pf-about__body">
          <div>
            <p className="pf-about__text">
              My focus is on clean code, accessible interfaces, and performance. Whether it is data
              analysis, front-end interfaces, or small tools that make life easier, I like digging into
              the details and iterating until the experience feels right.
            </p>
            <p className="pf-about__text" style={{ marginTop: '1rem' }}>
              Outside of code, I explore creative work through video editing—storytelling, pacing, and
              motion all inform how I think about UX on the web.
            </p>
          </div>
          <div>
            <ul className="pf-about__highlights">
              <li>End-to-end thinking from idea to implementation</li>
              <li>Comfortable with modern JavaScript and component-driven UIs</li>
              <li>Experience with data workflows and visualization</li>
              <li>Curious about computer vision and real-world applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
