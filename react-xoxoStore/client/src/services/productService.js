import * as request from "./requester";

const baseUrl = 'http://localhost:5000/api/products/';

export const getAll = () => request.get(baseUrl);
