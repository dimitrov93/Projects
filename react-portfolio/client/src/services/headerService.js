import * as request from "./requester";
import { baseUrl } from "../utils/apiConfig";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/header';
// const baseUrl = 'http://localhost:5000/api/header';

export const getHeader = () => request.get(`${baseUrl}/header`);
export const createHeader = (data) => request.post(`${baseUrl}/header`, data);
export const updateHeader = (id, data) => request.put(`${baseUrl}/header/${id}`, data);
