import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import {ProductProvider} from '../context/ProductsContext';
import * as productService from '../services/productService';


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
  // const {products} = useContext(ProductProvider)
  // console.log(products);
  const [products, setProducts] = useState([])

  useEffect(() => {
      productService.getAll()
          .then(result => {
              setProducts(result)
              console.log(result)
              // dispatch(action);
          });
  }, []);
  return (
    <Container>
      {products.map((x) => (
        <Product key={x._id} item={x} />
      ))}
    </Container>
  );
};

export default Products;
