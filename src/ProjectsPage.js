import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from './data/projects';
import ThreeBackground from './ThreeBackground';
import Header from './components/Header';
import './App.css';

const ProjectsPage = () => (
  <>
    <ThreeBackground />
    <div className="App" style={{ position: 'relative', zIndex: 10 }}>
      <Header />
      <section className="projects-page-section">
        <h2>All Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="project-card-link"
            >
              <div className="project-card-grid">
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
                  <span className="App-link">View Project Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default ProjectsPage; 