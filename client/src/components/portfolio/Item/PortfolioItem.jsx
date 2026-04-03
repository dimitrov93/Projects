import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import * as portfolioService from "../../../services/portfolioService";

const PortfolioItem = ({ item }) => {
  const { user } = useAuthContext();
  const handleDelete = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmation) {
      try {
        portfolioService.deletePortfolio(id);
        window.location.reload(false)
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <article key={item._id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={item.image} alt={item.title + item._id} />
      </div>
      <h3>{item.title}</h3>
      <div className="portfolio__item-cta">
        <a href={item.github} className="btn" target="_blank">
          Github
        </a>
        <a href={item.demo} className="btn" target="_blank">
          Live Demo
        </a>
        {user.email ? (
              <Link to={`portfolio/edit/${item._id}`}>
          <button className="btn">
              Edit
            </button>
          </Link>
            
        ) : (
          ""
        )}
        {user.email ? (
          <button className="btn" onClick={() => handleDelete(item._id)}> Delete </button>
        ) : (
          ""
        )}
      </div>
    </article>
  );
};

export default PortfolioItem;
