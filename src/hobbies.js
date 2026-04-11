const TOOLS = [
  { name: 'Adobe Premiere Pro', detail: 'Editing, timelines, color basics', emoji: '🎬' },
  { name: 'After Effects', detail: 'Motion graphics & simple compositing', emoji: '✨' },
  { name: 'Audition / workflow', detail: 'Audio cleanup & project organization', emoji: '🎧' },
];

function Hobbies() {
  return (
    <section id="hobbies" className="pf-section" aria-labelledby="hobbies-heading">
      <div className="pf-container">
        <span className="pf-section__label">Hobbies</span>
        <h2 id="hobbies-heading" className="pf-section__title">
          Video editing
        </h2>
        <p className="pf-section__lead">
          I enjoy cutting footage, shaping rhythm, and polishing stories—skills that pair surprisingly well
          with product and UI work.
        </p>
        <div className="pf-card-grid pf-card-grid--2 pf-card-grid--3">
          {TOOLS.map((tool) => (
            <article key={tool.name} className="pf-card">
              <div className="pf-hobby-thumb" aria-hidden>
                {tool.emoji}
              </div>
              <h3 className="pf-card__title">{tool.name}</h3>
              <p className="pf-card__text">{tool.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
