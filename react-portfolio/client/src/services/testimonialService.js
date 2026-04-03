import * as request from "./requester";
import { baseUrl } from "../utils/apiConfig";

// const baseUrl = 'https://myresume-node-deployment.onrender.com/api/testimonials';
// const baseUrl = 'http://localhost:5000/api/testimonials';

export const getAll = () => request.get(`${baseUrl}/testimonials`);
export const create = (data) => request.post(`${baseUrl}/testimonials/create`, data);
export const remove = (id) => request.del(`${baseUrl}/testimonials/${id}`);