import React, { useEffect, useState } from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import * as headerService from "../../services/headerService";
import { AiFillEdit } from "react-icons/ai";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const [values, setValues] = useState({
    id: "",
    name: "",
    description: "",
    title: "",
  });

  useEffect(() => {
    try {
      headerService.getHeader().then((result) => {
        setValues({
          id: result[0]._id,
          name: result[0].name,
          description: result[0].description,
          title: result[0].title,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    headerService.updateHeader(values.id, data).then((result) => {
      setIsVisible(false);
      navigate("/");
    });
  };

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <header>
      <div className="container header__container">
  
        {values.name ? (
          <>
            <h5>{values.title}</h5>
            <h1>{values.name}</h1>
            <h5 className="text-light">{values.description}</h5>
          </>
        ) : (
          <>
            <h2 className="loading_header">Loading....Please await!
            <br/>
            <div id="loading"></div>
            </h2>
          </>
        )}

        {user.email ? (
          <>
            <button
              type="button"
              onClick={handleClick}
              className="headerEditBtn"
            >
              <AiFillEdit />
            </button>
            {isVisible && (
              <div>
                <form onSubmit={onSubmit} className="changeName">
                  <input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Set new title"
                  />
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Set new name"
                  />
                  <input
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    placeholder="Set new description"
                  />
                  <button type="submit" className="btn btn-primary">
                    Change
                  </button>
                </form>
              </div>
            )}
          </>
        ) : (
          ""
        )}

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
