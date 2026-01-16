import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import ThreeBackground from '../ThreeBackground';
import Header from './Header';
import STLViewer from './STLViewer';
import './ProjectDetail.css';
import '../App.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);

  if (!project) {
    return (
      <>
        <ThreeBackground />
        <div className="App" style={{ position: 'relative', zIndex: 10 }}>
          <Header />
          <div className="project-not-found">
            <h2>Project Not Found</h2>
            <Link to="/" className="App-link">← Back to Home</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ThreeBackground />
      <div className="App" style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <div className="project-detail-container">
          <div className="back-navigation">
            <button onClick={() => navigate('/')} className="back-button">
              ← Back to Home
            </button>
            <Link to="/projects" className="back-button secondary">
              View All Projects
            </Link>
          </div>
          
          <div className="project-detail-header">
            <h1 className="project-detail-title">{project.title}</h1>
            <div className="project-detail-meta">
              <span className="project-status">{project.status}</span>
              <span className="project-date">{project.date}</span>
            </div>
          </div>

          <div className="project-detail-content">
            {/* Main Media Section */}
            <div className="project-main-media">
              {project.video ? (
                <video 
                  controls 
                  className="project-main-video"
                  poster={project.image}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-main-image"
                />
              ) : (
                <div className="project-media-placeholder-large">
                  <span>📷 Media Coming Soon</span>
                </div>
              )}
            </div>

            {/* Project Overview */}
            <section className="project-section">
              <h2 className="project-section-title">Overview</h2>
              <p className="project-description">{project.longDescription || project.description}</p>
            </section>

            {/* Technologies */}
            <section className="project-section">
              <h2 className="project-section-title">Technologies</h2>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
            </section>

            {/* Key Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <section className="project-section">
                <h2 className="project-section-title">Key Achievements</h2>
                <ul className="achievements-list">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 3D Models (STL Viewer) */}
            {project.stlFiles && project.stlFiles.length > 0 && (
              <section className="project-section">
                <h2 className="project-section-title">3D CAD Models</h2>
                <STLViewer 
                  stlFiles={project.stlFiles}
                  title={`${project.title} - 3D Models`}
                  autoRotate={false}
                />
              </section>
            )}

            {/* Media Gallery */}
            {(project.images && project.images.length > 0) || (project.videos && project.videos.length > 0) ? (
              <section className="project-section">
                <h2 className="project-section-title">Media Gallery</h2>
                <div className="media-gallery">
                  {project.images.map((img, index) => (
                    <div key={`img-${index}`} className="gallery-item">
                      <img src={img} alt={`${project.title} - Image ${index + 1}`} />
                    </div>
                  ))}
                  {project.videos.map((vid, index) => (
                    <div key={`vid-${index}`} className="gallery-item">
                      <video controls>
                        <source src={vid} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Project Details */}
            <section className="project-section">
              <h2 className="project-section-title">Project Details</h2>
              <div className="project-details-grid">
                <div className="detail-item">
                  <strong>Languages:</strong>
                  <span>{project.languages}</span>
                </div>
                <div className="detail-item">
                  <strong>Frameworks:</strong>
                  <span>{project.frameworks}</span>
                </div>
                <div className="detail-item">
                  <strong>Status:</strong>
                  <span>{project.status}</span>
                </div>
                <div className="detail-item">
                  <strong>Date:</strong>
                  <span>{project.date}</span>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="project-section project-links-section">
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn primary"
                >
                  <span>🔗</span> View on GitHub
                </a>
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn secondary"
                  >
                    <span>🚀</span> Live Demo
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
