import React, { useState } from "react";
import "./contactus.scss";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

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
    <div className="container max_height">
      <div>
        <h1 className="contacts__header">You can reach me out to me:</h1>
      </div>
      <div className="contacts__container">
        <div className="contacts__img"></div>

        <div className="contacts__information">
          <p className="contacts__information_item">
            <BsPhone className="contacts__icons" />
            <span>Phone</span> +359 884 334 998{" "}
          </p>
          <p className="contacts__information_item">
            <AiOutlineMail className="contacts__icons" /> <span>Email</span>{" "}
            ts.dimitrov93@gmail.com{" "}
          </p>
          <p className="contacts__information_item">
            Social media:
            <Link to={"https://www.facebook.com"}>
              Facebook: <FaFacebookF color="#3b5998" />{" "}
            </Link>
            <Link to={"https://instagram.com"}>
              Instagram: <FaInstagram className="instagram" />
            </Link>
          </p>
        </div>

        <div className="contacts__separator"></div>

        <div className="contacts__email">
          <p>You can send me an email directly here:</p>

          <form onSubmit={handleSubmit}>
            <div className="email__input">
              <input
                type="text"
                placeholder="Name:"
                name="name"
                required
              />
            </div>
            <div className="email__input">
              <input
                type="email"
                placeholder="Email:"
                name="email"
                required
              />
            </div>

            <div className="email__input">
              <textarea
                rows="7"
                type="text"
                placeholder="Message:"
                name="message"
                required
              ></textarea>
            </div>
            {text && <p className="text_handler">{text}</p>}
            <button type="submit" className="email__btn">
              Send now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
