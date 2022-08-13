import axios from "axios";
import authHeader from "./auth-header";
const API_URL = 'http://localhost:4000/v1/campaign/';

let header = {
    ...authHeader(),
    'Content-Type': 'multipart/form-data'
}


export const createCampaign = async (body) =>{
    console.log(authHeader());
    const response = await axios.post(API_URL + 'start', body, { headers: header });
    return response;
}