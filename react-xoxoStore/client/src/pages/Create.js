import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import * as productService from "../services/productService"

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
     padding: 15px 20px;
    margin-top: 10px;
    margin-right: 10px;
    width: 210px;
    height: 50px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

const Create = () => {
  // const { productAdd } = useContext(ProductContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const gameData = Object.fromEntries(new FormData(e.target));
    console.log(gameData);
    productService.create(gameData)
        .then(result => {
        });
};

  return (
    <>
      <Container>
        <Wrapper>
          <Title>New Product</Title>
          <Form onSubmit={onSubmit}>
            <Input name="title" type="text" placeholder="Title" />
            <Input name="description" type="text" placeholder="Description..." />
            <Input name="img" type="text" placeholder="Image..." />
            <Input name="price" type="number" placeholder="Price" />
            <Input name="categories" type="text" placeholder="Category" />
            <Select name="inStock">
              <option value="" hidden>
                Stock
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Select>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Create;
