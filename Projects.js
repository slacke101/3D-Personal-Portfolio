import React, { useState } from 'react';

const projects = [
  {
    title: 'AtheltIQs',
    description: '(insert a description for AtheltIQs here)',
    languages: 'C#',
    frameworks: '.NET, Windows Presentation Foundation',
    image: '', // Add image path or URL here
    github: 'https://github.com/slacke101/AtheltIQs',
  },
  {
    title: 'Withdrawal and Production of Natural Gas in Texas',
    description: 'Interactive web app visualizing monthly natural gas production and withdrawal data for Texas, sourced from the U.S. EIA API.',
    languages: 'Python',
    frameworks: 'Flask, Plotly',
    image: '', // Add image path or URL here
    github: 'https://github.com/slacke101/w-and-p-natural-gas-',
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Ongoing project showcasing principles of data structures using Python.',
    languages: 'Python',
    frameworks: 'None',
    image: '', // Add image path or URL here
    github: 'https://github.com/slacke101/DataStructures-Algorithms',
  },
  {
    title: '3D Personal Portfolio',
    description: 'A fully interactive 3-D personal portfolio website featuring floating atoms, a dynamic wave background, and hyper-realistic graphics built with modern WebGL tooling.',
    languages: 'JavaScript, HTML, CSS',
    frameworks: 'React, Three.js, react-three-fiber, @react-three/drei',
    image: '',
    github: '#', // TODO: update link
  },
  {
    title: 'BankAccountWF',
    description: 'Windows Forms App using C# OOP.',
    languages: 'C#',
    frameworks: 'WinForms',
    image: '',
    github: 'https://github.com/slacke101/BankAccountWF',
  },
];

const Projects = () => {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <section id="projects" className="section-projects">
      <h2>Featured Projects</h2>
      <div className="projects-list">
        {projects.map((project, i) => (
          <div className="project-card-flex" key={i}>
            {project.image && (
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  onClick={() => setModalSrc(project.image)}
                />
              </div>
            )}
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="project-langs">Languages: {project.languages}</div>
              <div className="project-frameworks">Frameworks: {project.frameworks}</div>
              <p>{project.description}</p>
              <a className="App-link" href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>

      {modalSrc && (
        <div className="modal-overlay" onClick={() => setModalSrc(null)}>
          <img src={modalSrc} alt="preview" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Projects; 