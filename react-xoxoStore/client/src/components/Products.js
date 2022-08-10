import styled from "styled-components";
import Product from "./Product";
import {useEffect, useState } from "react";
import * as productService from "../services/productService";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then((result) => {
      setProducts(result);
      // dispatch(action);
    });
  }, []);

  return (
    <Container>
      {products.length > 0 ? (
        products.map((x) => <Product key={x._id} item={x} />)
      ) : (
        <h1>There are no products yet!</h1>
      )}
    </Container>
  );
};

export default Products;
