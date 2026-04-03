import React from "react";
import "../Add/addPortfolio.css";
import * as portfolioService from "../../../services/portfolioService";
import { useNavigate } from "react-router-dom";

const AddPortfolio = () => {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    try {
      portfolioService.createPortfolio(data).then((result) => {
        console.log(result);
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add-page">
      <h1 className="add-page-title">Add Item</h1>
      <form className="add-page-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input type="text" id="title" name="title" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input type="text" id="image" name="image" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="github" className="form-label">
            Github:
          </label>
          <input type="text" id="github" name="github" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="demo" className="form-label">
            Demo:
          </label>
          <input type="text" id="demo" name="demo" className="form-input" />
        </div>

        <button type="submit" className="form-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
