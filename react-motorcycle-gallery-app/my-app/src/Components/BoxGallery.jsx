import React from "react";
import "./boxgallery.scss";
const BoxGallery = ({ title, imageSrc, description }) => {
  return (
    <div className="gallery-box">
      <a href={imageSrc}>
      <img src={imageSrc} alt={title} />
      </a>

      <div className="gallery__info">
        <h3>Title: {title}</h3>
        <h4>Description: {description}</h4>
      </div>
    </div>
  );
};

export default BoxGallery;
