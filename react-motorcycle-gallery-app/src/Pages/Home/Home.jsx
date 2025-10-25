import React from "react";
import BoxGallery from "../../Components/BoxGallery/BoxGallery";
import Body from "../../Layout/Body/Body";

const Home = ({ galleryItems }) => {
  return (
    <div className="container">
      <Body />

      <div className="gallery__container">
        {galleryItems.slice(0, 4).map((item, index) => (
          <BoxGallery key={index} title={item.title} imageSrc={item.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Home;
