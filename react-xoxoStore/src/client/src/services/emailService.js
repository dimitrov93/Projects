import * as request from "./requester";

const baseUrl = 'https://xoxostore.onrender.com/api/email';

export const emailPost = (email) => 
    request.post(`${baseUrl}`, { email });