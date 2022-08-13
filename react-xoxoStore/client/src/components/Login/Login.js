import styled from "styled-components";
import { mobile } from "../../responsive";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkToRegister = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.p`
  color: #d9534f;
  padding-top: 30px;
`;

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
      authService.login(email, password)
      .then((authData) => {
        userLogin(authData);
        if (authData.message) {
          setError(authData.message)
          return
        }
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Login with an Account</Title>
          <Form onSubmit={onSubmit}>
            <Input type="email" id="email" name="email" placeholder="Email" />
            <Input
              type="password"
              id="login-password"
              name="password"
              placeholder="Password"
            />
            <Button>Login</Button>
            {error && <Error>{error}</Error>}
            <Link to="/register">
              <LinkToRegister>CREATE A NEW ACCOUNT</LinkToRegister>
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
