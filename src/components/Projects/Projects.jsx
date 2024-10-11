import React, { useState, useEffect } from "react";
import "./Projects.scss";

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch the project data from the JSON file
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading project data", error));
  }, []);

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  const { title, description, technologies, videoSrc, link } =
    projects[currentIndex];

  return (
    <div className="project" id="projects">
      <div className="project__content">
        <h2 className="project__title">{title}</h2>
        <iframe
            className="project__video"
            src={videoSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        <p className="project__description">
          {description}
          <span className="project__link">
            <a
              className="project__link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </span>
        </p>
        <h3 className="project__tech">Technologies: {technologies}</h3>
      </div>
      <div className="project__buttons">
        <button
          className="project__button-previous"
          onClick={handlePreviousProject}
        >
          Previous
        </button>
        <button className="project__button-next" onClick={handleNextProject}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectShowcase;
