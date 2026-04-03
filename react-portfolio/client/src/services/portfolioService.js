import * as request from "./requester";
import { baseUrl } from "../utils/apiConfig";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/portfolio';
// const baseUrl = 'http://localhost:5000/api/portfolio';

export const getOne = (id) => request.get(`${baseUrl}/portfolio/${id}`);
export const getAll = () => request.get(`${baseUrl}/portfolio`);
export const createPortfolio = (data) => request.post(`${baseUrl}/portfolio/create`, data);
export const updatePortfolio = (id, data) => request.put(`${baseUrl}/portfolio/${id}`, data);
export const deletePortfolio = (id) => request.del(`${baseUrl}/portfolio/${id}`);

