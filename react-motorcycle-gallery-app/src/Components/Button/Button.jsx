import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Button = ({ text, direction }) => {
  const location = useLocation();

  const onClickHandler = () => {
    switch (location.pathname) {
      case "/":
        return console.log('Home Page');
      case "/about":
        return console.log('About Page');
      case "/gallery":
        return console.log('Gallery Page');
      case "/contacts":
        return console.log('Contacts Page');
        case "/login":
          return console.log('Login Page');
      default:
        return "React Test";
    }
  }

  return (
    <>
      {direction ? (
        <Link to={direction}>
          <button type="submit" className="primary__btn" onClick={onClickHandler}>
            {text}
          </button>
        </Link>
      ) : (
          <button type="submit" className="primary__btn" onClick={onClickHandler}>
            {text}
          </button>
      )}
    </>
  );
};

export default Button;
