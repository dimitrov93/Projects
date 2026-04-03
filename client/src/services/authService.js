import * as request from "./requester";
import { baseUrl } from "../utils/apiConfig";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/auth';
// const baseUrl = "http://localhost:5000/api/auth";

export const login = (email, password) =>
  request.post(`${baseUrl}/auth/login`, { email, password });

export const logout = async (accessToken) => {
  try {
    const response = await fetch(`${baseUrl}/auth/logout`, {
      headers: {
        "X-Authorization": accessToken,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
