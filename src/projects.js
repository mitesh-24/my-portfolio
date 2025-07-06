function Projects() {
    const projects = [
        { title: "Sales data Analysis Project", description: "This project involves the analysis of sales data using Pandas for data cleaning and preprocessing and Matplotlib for creating visual representations."},
        { title: "To do app", description: "Created a simple ToDo List application using VueJS - A javascript framework"},
        { title: " Car-Counter", description: "This project implements a real-time car counting system using computer vision techniques."},
    ];

    return (
        <section>
            <h2>Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key = {index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects;
// This code defines a React component named Projects that displays a list of projects. Each project has