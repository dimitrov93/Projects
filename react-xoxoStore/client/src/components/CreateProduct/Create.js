import React, { useState } from "react";
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

const Error = styled.p`
  color: #d9534f;
  padding-top: 30px;
`

const Create = () => {
  // const { productAdd } = useContext(ProductContext);
  const { user } = useAuthContext();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    title: "",
    description: "",
    img: "",
    price: "",
    categories: "",
    inStock: "",
    color: "",
    size: "",
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const minLength = (e, bound) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < bound,
    }));
  };

  const isPositive = (e) => {
    let number = Number(e.target.value);

    setErrors((state) => ({
      ...state,
      [e.target.name]: number < 0,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target));
 
    productData["owner"] = user._id;

    productService
      .create(productData).then((result) => {
    })
    .catch(err => console.log(err))
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
            <Input
              name="title"
              type="text"
              placeholder="Title"
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 3)}
            />
            {errors.title && <Error>Title should be at least 3 characters long!</Error>}

            <Input
              name="description"
              type="text"
              placeholder="Description..."
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 10)}
              />
              {errors.description && (
                    <Error>
                      Description should be at least 10 characters long!
                    </Error>
              )}
            <Input 
            name="img" 
            type="text" 
            placeholder="Image..." 
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 10)}
            />
            {errors.img && (
                  <Error>
                    Image is not valid!
                  </Error>
            )}
            <Input 
            name="price" 
            type="number" 
            placeholder="Price"
            onChange={changeHandler}
            onBlur={(e) => isPositive(e)}
            />
            {errors.price && (
                  <Error>
                    Price should be a positive number!
                  </Error>
            )}
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
            <Input 
            name="color" 
            type="text" 
            placeholder="Color..." 
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 3)}
            />
            {errors.color && (
                  <Error>
                    Color is required!
                  </Error>
            )}
            <Input 
            name="size" 
            type="text" 
            placeholder="Size" 
            onChange={changeHandler}
            onBlur={(e) => minLength(e, 1)}
            />
            {errors.size && (
                  <Error>
                    Size is not valid!
                  </Error>
            )}
            <Button onClick={refreshPage}>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Create;
