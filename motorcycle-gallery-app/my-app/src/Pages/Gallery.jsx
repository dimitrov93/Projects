import React from "react";
import BoxGallery from "../Components/BoxGallery";

const Gallery = ({ galleryItems }) => {

  return (
    <div className="container gallery-page">
      <h2>Gallery Page</h2>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <BoxGallery key={index} title={item.title} imageSrc={item.imageSrc} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
