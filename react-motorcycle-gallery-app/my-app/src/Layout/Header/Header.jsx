import React from "react";
import logo from "../../Assets/logo.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import Menu from "../../Components/Menu/Menu";
import { useAuthContext } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuthContext();

  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="" className="nav__logo" />
      </Link>
      <div className="drop__down">
        <button className="drop__btn">
          <RxDropdownMenu size={50} />
        </button>
        <div className="dropdown__content">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contacts">Contacts</Link>
          {!user.email ? (
            <Link to={"/login"}>Login</Link>
          ) : (
            <Link to={"/logout"}>Logout</Link>
          )}
        </div>
      </div>

      <div className="nav__buttons">
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
