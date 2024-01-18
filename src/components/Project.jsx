// Project.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Project.css';

const projects = [
  {
    title: 'Project 1',
    description: 'This is the first awesome project!',
    image: 'https://example.com/project1-image.jpg',
  },
  {
    title: 'Project 2',
    description: 'Explore the wonders of the second amazing project!',
    image: 'https://example.com/project2-image.jpg',
  },
  {
    title: 'Project 3',
    description: 'Discover the third incredible project!',
    image: 'https://example.com/project3-image.jpg',
  },
  {
    title: 'Project 4',
    description: 'Unleash the power of the fourth fantastic project!',
    image: 'https://example.com/project4-image.jpg',
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project-header">
            <h2>{project.title}</h2>
          </div>
          <div className="project-content">
            <p>{project.description}</p>
            {/* Add "View More" link to each project */}
            <Link to={`/project/${index}`} className="view-more-link">
              View More
            </Link>
          </div>
          <div className="project-image">
            <img src={project.image} alt={`${project.title} Image`} />
          </div>
          <div className="project-footer">
            <span className="bordered border-danger"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
