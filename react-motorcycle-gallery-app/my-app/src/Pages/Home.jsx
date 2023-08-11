import React from "react";
import "./home.scss";
import BoxGallery from "../Components/BoxGallery";


const Home = ({ galleryItems }) => {
  return (
    <>
      <div className="home__img">
        <h1>Welcome to my website</h1>
      </div>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <p>Discover amazing content and explore our gallery full of motorcycles.</p>
            <button className="cta-button">Explore Now</button>
          </div>
        </div>

        <div className="gallery-container">
        {galleryItems.slice(0,4).map((item, index) => (
          <BoxGallery key={index} title={item.title} imageSrc={item.imageSrc} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
