import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A brief description of my first project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A brief description of my second project.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>A brief description of my third project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
