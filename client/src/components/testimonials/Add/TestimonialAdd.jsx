import React from "react";
import * as testimonialService from '../../../services/testimonialService'
import { useNavigate } from "react-router-dom";

const AddPortfolio = () => {
  const navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    try {
        testimonialService.create(data)
            .then(result => {
                console.log(result);
                navigate('/#testimonials')
            })
    } catch (error) {
        console.log(error);
    }
   
  }
  
  return (
    <div className="add-page">
      <h1 className="add-page-title">Add Testimonial</h1>
      <form className="add-page-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" id="name" name="name" className="form-input" placeholder="Your name...."/>
        </div>

        <div className="form-group">
            <label htmlFor="review" className="form-label">
                Review:
            </label>
            <input type="text" id="review" name="review" className="form-input" placeholder="Your review..." />
        </div>

        <div className="form-group">
            <label htmlFor="avatar" className="form-label">
                Avatar:
            </label>
            <input type="text" id="avatar" name="avatar" className="form-input" placeholder="URL that leads to your avatar/picture" />
        </div>


        <button type="submit" className="form-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
