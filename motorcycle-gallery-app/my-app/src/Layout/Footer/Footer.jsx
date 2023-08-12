import React from "react";
import "./footer.scss";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../../Components/Menu/Menu";

const Footer = () => {
  return (
    <footer>
      <Menu />

      <div className="footer__socials">
        <Link
          to={"https://www.facebook.com/dimitrovtsvetomir/"}
          target="_blank"
        >
          <FaFacebookF />{" "}
        </Link>
        <Link
          to={"https://www.linkedin.com/in/tsvetomir-dimitrov-921678238/"}
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>
        <Link to={"https://github.com/dimitrov93"} target="_blank">
          <FaGithub />
        </Link>
      </div>

      <div className="footer__copyrights">
        <small>&copy; All rights reserved. Made by Tsvetomir</small>
      </div>
    </footer>
  );
};

export default Footer;
