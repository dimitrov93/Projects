import React from "react";
import "./services.css";
import { BsCheckCircle } from "react-icons/bs";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Sales */}
        <article className="service">
          <div className="service__head">
            <h3>Sales</h3>
          </div>

          <div className="service__list">
            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="knowledge"
                data-tooltip-content="In-depth knowledge of the products or services offered by the company, and the ability to effectively communicate the benefits to potential customers."
              >
                Product knowledge
              </p>
              <ReactTooltip anchorId="knowledge" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="engagement"
                data-tooltip-content="Strong interpersonal skills, including the ability to listen actively, communicate effectively, and build relationships with customers.
                "
              >
                Customer engagement
              </p>
              <ReactTooltip anchorId="engagement" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="strategies"
                data-tooltip-content="Knowledge of various sales strategies and techniques, and the ability to apply them in a variety of situations to close deals."
              >
                Sales strategies
              </p>
              <ReactTooltip anchorId="strategies" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="presentation"
                data-tooltip-content="Ability to present products and services in a clear, concise, and compelling manner.                "
              >
                Presentation skills
              </p>
              <ReactTooltip anchorId="presentation" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Negotiation"
                data-tooltip-content="Ability to negotiate with customers and close deals in a mutually beneficial manner.
                "
              >
                Negotiation skills
              </p>
              <ReactTooltip anchorId="Negotiation" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="service"
                data-tooltip-content="Strong customer service skills, including the ability to handle customer inquiries, resolve issues, and maintain a positive relationship with customers.
                "
              >
                Customer service
              </p>
              <ReactTooltip anchorId="service" className="reactToolTip" />
            </li>

            {/* END OF FIRST */}
          </div>
        </article>

        {/* Full-stack developer */}
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>

          <div className="service__list">
            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Technical proficiency"
                data-tooltip-content="Strong knowledge of both front-end and back-end technologies, including HTML, CSS, JavaScript, and frameworks such as React, Angular,ExpressJS as well as server-side technologies such as Node.js.
                "
              >
                Technical proficiency
              </p>
              <ReactTooltip
                anchorId="Technical proficiency"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Responsiveness"
                data-tooltip-content="Ability to create responsive designs that adapt to different screen sizes and devices.
                "
              >
                Responsiveness
              </p>
              <ReactTooltip
                anchorId="Responsiveness"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Web accessibility"
                data-tooltip-content="Knowledge of web accessibility standards and experience implementing accessibility features in web designs.
                "
              >
                Web accessibility
              </p>
              <ReactTooltip
                anchorId="Web accessibility"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Testing and debugging:"
                data-tooltip-content="Ability to test and debug code to ensure it works as expected and performs optimally.
                "
              >
              Testing and debugging
              </p>
              <ReactTooltip
                anchorId="Testing and debugging:"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Cross-functional collaboration"
                data-tooltip-content="Ability to work effectively with other members of the development team, including designers, project managers, and other developers.
                "
              >
                Cross-functional collaboration
              </p>
              <ReactTooltip
                anchorId="Cross-functional collaboration"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Database management"
                data-tooltip-content="Ability to design and implement efficient database structures, and experience working with database management systems such as MongoDB, MariaDB"
              >
                Database management
              </p>
              <ReactTooltip
                anchorId="Database management"
                className="reactToolTip"
              />
            </li>
          </div>
        </article>

        {/* Team Lead */}
        <article className="service">
          <div className="service__head">
            <h3>Team Management</h3>
          </div>

          <div className="service__list">
            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Leadership"
                data-tooltip-content="Providing guidance, mentorship, and support to my team members to help them reach their goals and perform to their fullest potential.
                "
              >
                Leadership
              </p>
              <ReactTooltip anchorId="Leadership" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Communication"
                data-tooltip-content="Foster open and effective communication within the team, and act as a liaison between the team and other stakeholders, including management and customers.
                "
              >
                Communication
              </p>
              <ReactTooltip anchorId="Communication" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Motivation"
                data-tooltip-content="Creating a positive and supportive work environment, and recognize and reward team members for their contributions.
                "
              >
                Motivation
              </p>
              <ReactTooltip anchorId="Motivation" className="reactToolTip" />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Problem-solving"
                data-tooltip-content="Helping team members to resolve any challenges or obstacles they encounter, and support them in finding creative solutions to problems.
                "
              >
                Problem-solving
              </p>
              <ReactTooltip
                anchorId="Problem-solving"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Technical expertise"
                data-tooltip-content="Using my knowledge and experience to provide technical assistance and support to team members, and help them develop their technical skills."
              >
                Technical expertise
              </p>
              <ReactTooltip
                anchorId="Technical expertise"
                className="reactToolTip"
              />
            </li>

            <li>
              <BsCheckCircle className="service__list-icon" />
              <p
                id="Performance management"
                data-tooltip-content="Providing regular feedback to team members on their performance, and help them identify areas for improvement.
                "
              >
                Performance management
              </p>
              <ReactTooltip
                anchorId="Performance management"
                className="reactToolTip"
              />
            </li>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
