import React from "react";
import "./boxgallery.scss";
const BoxGallery = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} style={{width:'100%'}}/>
      <h3>Model: {title}</h3>
      {description ? <h4>Description: {description}</h4> : '' }
      
    </div>
  );
};

export default BoxGallery;
