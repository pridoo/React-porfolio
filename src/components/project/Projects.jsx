import React, { Component } from 'react';
import "./projects.css";
import { Data } from "./Data";

class Projects extends Component {
  render() {
    return (
      <section className="projects container section">
        <h2 className="section__title">My Projects</h2>
        <span className="section__subtitle">Design and System</span>
        <div className="projects__container">
          {Data.map(({ id, image, title, description }) => (
            <div className="projects__card" key={id}>
              <img src={image} alt={title} className="projects__img" />
              <h3 className="projects__name">{title}</h3>
              <p className="projects__description">{description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
