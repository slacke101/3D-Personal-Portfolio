import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const projects = projectsData;

  // Responsive cards per page
  const getCardsPerPage = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 900) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  };

  const [responsiveCardsPerPage, setResponsiveCardsPerPage] = useState(getCardsPerPage());

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerPage = getCardsPerPage();
      setResponsiveCardsPerPage(newCardsPerPage);
      const maxPage = Math.ceil(projects.length / newCardsPerPage) - 1;
      if (currentPage > maxPage) {
        setCurrentPage(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, projects.length]);

  const totalPages = Math.ceil(projects.length / responsiveCardsPerPage);
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const goToPage = (page) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      goToPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      goToPage(currentPage + 1);
    }
  };

  // Get projects for current page
  const startIndex = currentPage * responsiveCardsPerPage;
  const endIndex = startIndex + responsiveCardsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <section id="projects" className="featured-projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-carousel-container">
        {canGoPrev && (
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={handlePrev}
            aria-label="Previous projects"
          >
            ‹
          </button>
        )}
        <div className="featured-projects-grid">
          {currentProjects.map((project, index) => (
            <Link 
              key={startIndex + index} 
              to={`/project/${project.id}`}
              className="featured-project-card-link"
            >
              <div className="featured-project-card">
                <div className="featured-project-media">
                  {project.mediaType === 'video' && project.video ? (
                    <video 
                      controls 
                      className="project-media-content"
                      poster={project.image}
                      onClick={(e) => e.preventDefault()}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-media-content"
                    />
                  ) : (
                    <div className="project-media-placeholder">
                      <span>📷 Media Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="featured-project-info">
                  <h3>{project.title}</h3>
                  <div className="featured-project-tech">
                    <div className="tech-item">
                      <strong>Languages:</strong> {project.languages}
                    </div>
                    <div className="tech-item">
                      <strong>Frameworks:</strong> {project.frameworks}
                    </div>
                  </div>
                  <div className="featured-project-links">
                    <span className="project-link-btn view-project-btn">
                      <span>👁️</span> View Project
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {canGoNext && (
          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={handleNext}
            aria-label="Next projects"
          >
            ›
          </button>
        )}
      </div>
      {totalPages > 1 && (
        <div className="carousel-indicators">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${currentPage === index ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
