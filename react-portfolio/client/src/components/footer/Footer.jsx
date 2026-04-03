import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><Link to="#">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#experience">Experience</Link></li>
        <li><Link to="#services">Services</Link></li>
        <li><Link to="#portfolio">Portfolio</Link></li>
        <li><Link to="#testimonials">Testimonials</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>

      <div className="footer__socials">
        <Link to="https://www.facebook.com/dimitrovtsvetomir" target="_blank"><FaFacebookF /></Link>
        <Link to="https://www.instagram.com/cvetomir.dimitrov" target="_blank"><FaInstagram /></Link>
        <Link to="https://www.linkedin.com/in/tsvetomir-dimitrov-921678238" target="_blank"><FaLinkedinIn /></Link>
      </div>

      <div className="footer__copyrights">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer