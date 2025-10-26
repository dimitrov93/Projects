import styled from "styled-components";
import { mobile } from "../../responsive";
import { useNavigate } from 'react-router-dom';
import * as authService from "../../services/authService";
import { withAuth } from "../../context/AuthContext";
import { useState } from "react";


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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.p`
  color: #d9534f;
  padding-top: 30px;
`;


const Register = ({auth}) => {
  const navigate = useNavigate();
  const [error, setError] = useState();

  
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const username = formData.get('userName');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        
        if (password !== confirmPassword) {
            return;
        }

        authService.register(username, email, password)
        .then(authData => {
            if (authData.message) {
            setError(authData.message)
            return
            }
            auth.userLogin(authData);
            navigate('/');
        });
      }
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Create an Account</Title>
          <Form onSubmit={onSubmit}>
            <Input name="firstName" type="firstName" placeholder="First Name" />
            <Input name="lastName" type="lastName" placeholder="Last Name" />
            <Input name="userName" type="userName" placeholder="Username" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Input name="confirmPassword" type="confirmPassword" placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
            {error && <Error>{error}</Error>}
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

const RegisterWithAuth = withAuth(Register);

export default RegisterWithAuth;
