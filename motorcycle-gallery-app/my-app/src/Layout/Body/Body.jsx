import React from "react";
import Button from "../../Components/Button/Button";
import './body.scss'

const Body = () => {
  return (
    <>
      <div className="home__img">
        <h1>Welcome to my website</h1>
      </div>
      <div className="banner">
        <div className="banner__content">
          <p>
            Discover amazing content and explore our gallery full of
            motorcycles.
          </p>
          <Button text="Explore now" direction={"/gallery"} />
        </div>
      </div>
    </>
  );
};

export default Body;
