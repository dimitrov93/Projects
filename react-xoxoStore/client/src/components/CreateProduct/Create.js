import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import * as productService from "../../services/productService";
import { useAuthContext } from "../../context/AuthContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 48%;
  margin-top: 10px;
  height: 50px;

  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Select = styled.select`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Create = () => {
  // const { productAdd } = useContext(ProductContext);
  const { user } = useAuthContext();

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target));
    productData['owner'] = user._id
    productService.create(productData)
      .then((result) => {
        console.log(result);
    });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>New Product</Title>
          <Form onSubmit={onSubmit}>
            <Input name="title" type="text" placeholder="Title" />
            <Input
              name="description"
              type="text"
              placeholder="Description..."
            />
            <Input name="img" type="text" placeholder="Image..." />
            <Input name="price" type="number" placeholder="Price" />
            <Select name="categories">
              <option value="" hidden>
              Category
              </option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
            </Select>
            <Select name="inStock">
              <option value="" hidden>
                Stock
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
            <Button onClick={refreshPage}>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Create;
