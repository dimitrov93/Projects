import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ months Team lead</small> <br />
              <small>5+ year Sales/Support</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Currently working at</h5>
              <small>Montway Auto Transport</small>
            </article>

            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>4+ Complited projects</small>
            </article>
          </div>

          <p>
            Highly motivated and results-driven full-stack developer with
            experience in HTML, CSS, JavaScript, React, Angular, Node.js, Java,
            Spring Web, MongoDB, MariaDB and Microsoft Excel. Proficient in
            creating dynamic and responsive web applications with a focus on
            user experience. Skilled in testing and quality assurance, both
            manual and automated. Proven track record of delivering high-quality
            work on time and within budget.
          </p>

          <p>
            Experienced Sales Specialist with 5 years of experience in
            developing and implementing successful sales strategies.
            Demonstrated ability to achieve and exceed sales targets, build and
            maintain strong client relationships, and effectively manage a team.
            Recently elevated to the role of Team Lead, where I successfully led
            two departments, providing guidance and direction to achieve company
            goals and improve overall performance.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
