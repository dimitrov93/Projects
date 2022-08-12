import styled from "styled-components";
import Product from "./Product";
import {useEffect, useState } from "react";
import * as productService from "../../services/productService";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([]);
  
  
  useEffect(() => {
    try {
      productService.getAll()
        .then((result) => {
          setProducts(result);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  let filtered;

  if (filters?.color && filters?.size) {
    filtered = products.filter((x) => x.color === filters?.color)
      .filter((x) => x.size === filters?.size )
  }

  if (filters?.color) {
    filtered = products?.filter((x) => {
      return x.color === filters?.color
    });
  }

  if (filters?.size) {
    filtered = products.filter((x) => {
      return x.size === filters?.size
    })
  }



  return (
    <Container>
      {filtered 
      ? filtered.map((x) => <Product key={x._id} item={x} />)
      : products.map((x) => <Product key={x._id} item={x} />)
      }

      {products.length <= 0  ? 
        <h1>There are no products yet!</h1>
        : ''
      }
 
    </Container>
  );
};

export default Products;
