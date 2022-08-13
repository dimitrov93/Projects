import * as request from "./requester";

const baseUrl = 'http://localhost:5000/api/email';

export const emailPost = (email) => 
    request.post(`${baseUrl}`, { email });