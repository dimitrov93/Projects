import React, { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Login = () => {
    
  const navigate = useNavigate();
  const { user, userLogin } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();


      const user = { email: formData.email, password: formData.password };

      userLogin(user)
      navigate("/");
    
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="loginInput"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">
        {!user.email ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default Login;
