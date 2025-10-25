import React from "react";
import './gallery.scss'
import BoxGallery from "../../Components/BoxGallery/BoxGallery";

const Gallery = ({ galleryItems }) => {

  return (
    <div className="container gallery__page">
      <h2>Gallery Page</h2>
      <div className="gallery__container">
        {galleryItems.map((item, index) => (
          <BoxGallery key={index} title={item.title} imageSrc={item.imageSrc} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
