import React from "react";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";


const Footer = () => {
  return (
    <footer>
      <Menu />

      <div className="footer__socials">
        <Link to="https://facebook.com">
          <FaFacebookF />{" "}
        </Link>
        <Link to="https://instagram.com">
          <FaInstagram />
        </Link>
        <Link to="https://linkedin.com">
          <FaLinkedinIn />
        </Link>
      </div>

      <div className="footer__copyrights">
        <small>&copy; All rights reserved. Made by Tsvetomir</small>
      </div>
    </footer>
  );
};

export default Footer;
