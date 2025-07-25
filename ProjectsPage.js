import React from 'react';
import './App.css';

const projects = [
  {
    title: 'AtheltIQs',
    description: '(insert a description for AtheltIQs here)',
    languages: 'Python',
    frameworks: 'Flask, React',
    image: '', // Add image path or URL here
    github: 'https://github.com/slacke101/AtheltIQs',
  },
  {
    title: 'w-and-p-natural-gas-',
    description: 'Interactive web app visualizing monthly natural gas production and withdrawal data for Texas, sourced from the U.S. EIA API.',
    languages: 'Python',
    frameworks: 'Flask, Plotly',
    image: '',
    github: 'https://github.com/slacke101/w-and-p-natural-gas-',
  },
  {
    title: 'DataStructures-Algorithms',
    description: 'Ongoing project showcasing principles of data structures using Python.',
    languages: 'Python',
    frameworks: 'None',
    image: '',
    github: 'https://github.com/slacke101/DataStructures-Algorithms',
  },
  {
    title: 'BankAccountWF',
    description: 'Windows Forms App using C# OOP.',
    languages: 'C#',
    frameworks: 'WinForms',
    image: '',
    github: 'https://github.com/slacke101/BankAccountWF',
  },
  {
    title: 'Flight_ControllerMKI',
    description: '(insert a description for Flight_ControllerMKI here)',
    languages: 'C',
    frameworks: 'None',
    image: '',
    github: 'https://github.com/slacke101/Flight_ControllerMKI',
  },
  {
    title: 'SeaLink',
    description: '(insert a description for SeaLink here)',
    languages: 'Python',
    frameworks: 'None',
    image: '',
    github: 'https://github.com/slacke101/SeaLink',
  },
  {
    title: '3D Personal Portfolio',
    description: 'A 3D personal portfolio website showcasing my skills and projects.',
    languages: 'HTML, CSS, JavaScript, Three.js',
    frameworks: 'None',
    image: '',
    github: 'https://github.com/slacke101/3D-Personal-Portfolio',
  },
];

const ProjectsPage = () => (
  <section className="projects-page-section">
    <h2>All Projects</h2>
    <div className="projects-grid">
      {projects.map((project, i) => (
        <div className="project-card-grid" key={i}>
          {project.image && (
            <div className="project-media">
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
  </section>
);

export default ProjectsPage; 