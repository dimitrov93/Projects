import * as request from "./requester";

const baseUrl = 'http://localhost:5000/api/products/';

export const getAll = () => request.get(baseUrl);

export const getOne = (productId) => request.get(`${baseUrl}/${productId}`);

export const create = (productData) => request.post(baseUrl, productData);

export const remove = (productId) => request.del(`${baseUrl}/${productId}`);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);
