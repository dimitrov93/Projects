import React from "react";
import Categories from "./Categories";
import Products from "../Catalog/Products";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />

      <Products />
    </div>
  );
};

export default Home;
