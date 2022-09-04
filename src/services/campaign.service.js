import axios from "axios";
import authHeader from "./auth-header";
const API_URL = 'http://localhost:4000/v1/campaign/';


export const createCampaign = async (body) =>{
    const response = await axios.post(API_URL + 'start', body, { headers: {...authHeader(), 'Content-Type': 'multipart/form-data'} });
    return response;
}

export const getALlCampaign = async(...args)=>{
    const res = await axios.get(args[0]);
    return res.data
}

export const getCampaign = async(...args)=>{
    try {
        const res = await axios.get(args[0],  { headers: {...authHeader()} });
        return res.data;
    } catch (error) {
        alert("No response");
    }
    
}

export const updateCampaign = async(id, body)=>{
    const response = await axios.post(API_URL + `/update/${id}`, body, { headers: {...authHeader(), 'Content-Type': 'multipart/form-data'} });
    return response;
}