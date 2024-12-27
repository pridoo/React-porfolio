import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My creative journey</span>

      <div className="portfolio__container container">
        <div className="portfolio__tabs">
          <div
            className={toggleState === 1 ? "portfolio__button portfolio__active" : "portfolio__button"}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-palette portfolio__icon"></i>
            Projects
          </div>

          <div
            className={toggleState === 2 ? "portfolio__button portfolio__active" : "portfolio__button"}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-layers portfolio__icon"></i>
            Experience
          </div>
        </div>

        <div className="portfolio__sections">
          {/* Projects Section */}
          <div className={toggleState === 1 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
            <div className="portfolio__data">
              <div>
                <h3 className="portfolio__title">Web Design</h3>
                <span className="portfolio__subtitle">Personal Project</span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div>
            </div>

            <div className="portfolio__data">
              <div></div>

              <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div>

              <div>
                <h3 className="portfolio__title">Mobile App Development</h3>
                <span className="portfolio__subtitle">Freelance Project</span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className={toggleState === 2 ? "portfolio__content portfolio__content-active" : "portfolio__content"}>
            <div className="portfolio__data">
              <div>
                <h3 className="portfolio__title">UI/UX Designer</h3>
                <span className="portfolio__subtitle">ABC Company</span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>

              <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div>
            </div>

            <div className="portfolio__data">
              <div></div>

              <div>
                <span className="portfolio__rounder"></span>
                <span className="portfolio__line"></span>
              </div>

              <div>
                <h3 className="portfolio__title">Frontend Developer</h3>
                <span className="portfolio__subtitle">XYZ Corp</span>
                <div className="portfolio__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023-Present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
