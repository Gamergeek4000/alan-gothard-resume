import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-item glassy">
          <img src="https://via.placeholder.com/300x200" alt="Project 1" />
          <h3>E-commerce Website</h3>
        </div>
        <div className="project-item glassy">
          <img src="https://via.placeholder.com/300x200" alt="Project 2" />
          <h3>Weather App</h3>
        </div>
        <div className="project-item glassy">
          <img src="https://via.placeholder.com/300x200" alt="Project 3" />
          <h3>Task Management Tool</h3>
        </div>
      </div>
    </section>
  );
}

export default Projects; 