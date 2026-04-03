import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as portfolioService from "../../../services/portfolioService";

const EditPortfolio = () => {
  const portfolioId = useParams().id;
  const navigate = useNavigate()
  const [values, setValues] = useState({
    title: "",
    image: "",
    github: "",
    demo: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    try {
      portfolioService.getOne(portfolioId)
        .then((result) => {
            setValues({
                title: result.title,
                image: result.image,
                github: result.github,
                demo: result.demo,
              });
      });
    } catch (error) {}
  }, []);

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    
    try {
        portfolioService.updatePortfolio(portfolioId, data)
            .then(result => {
                navigate('/')
            })
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
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            value={values.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-input"
            value={values.image}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="github" className="form-label">
            Github:
          </label>
          <input
            type="text"
            id="github"
            name="github"
            className="form-input"
            value={values.github}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="demo" className="form-label">
            Demo:
          </label>
          <input
            type="text"
            id="demo"
            name="demo"
            className="form-input"
            value={values.demo}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-button">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default EditPortfolio;
