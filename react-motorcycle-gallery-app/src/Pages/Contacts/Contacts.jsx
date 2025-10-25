import React, { useState } from "react";
import "./contacts.scss";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const ContactUs = () => {
  const [text, setText] = useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setText("Email sent successfully!");

    setTimeout(() => {
      setText(" ");
    }, 3000);
  };

  return (
    <div className="container contacts">
      <div>
        <h1 className="contacts__header">You can reach me out to me:</h1>
      </div>
      <div className="contacts__container">
        <div className="contacts__img"></div>

        <div className="contacts__information">
          <p className="contacts__information_item">
            <BsPhone className="contacts__icons" />
            <span>Phone</span>
            <span>+359 884 334 998</span>
          </p>
          <p className="contacts__information_item">
            <AiOutlineMail className="contacts__icons" /> <span>Email</span>
            <span> ts.dimitrov93@gmail.com</span>
          </p>
          <p className="contacts__information_item">
            Social media:
            <Link
              to={"https://www.facebook.com/dimitrovtsvetomir/"}
              target="_blank"
            >
              Facebook: <FaFacebookF color="#3b5998" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/tsvetomir-dimitrov-921678238/"}
              target="_blank"
            >
              LinkedIn: <FaLinkedin color="#0077B5" />
            </Link>
            <Link to={"https://github.com/dimitrov93"} target="_blank">
              GitHub: <FaGithub color="#181717" />
            </Link>
          </p>
        </div>

        <div className="contacts__separator"></div>

        <div className="contacts__email">
          <p>You can send me an email directly here:</p>

          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder="Name:" name="name" required />
            </div>
            <div>
              <input type="email" placeholder="Email:" name="email" required />
            </div>

            <div>
              <textarea
                rows="7"
                type="text"
                placeholder="Message:"
                name="message"
                required
              ></textarea>
            </div>
            {text && <p className="text_handler">{text}</p>}

            <Button text="Send now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
