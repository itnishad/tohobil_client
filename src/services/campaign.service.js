import axios from "axios";
import authHeader from "./auth-header";
const API_URL = 'http://localhost:4000/v1/campaign/';


export const createCampaign = async (body) =>{
    const response = await axios.post(API_URL + 'start', body, { headers: {...authHeader(), 'Content-Type': 'multipart/form-data'} });
    return response;
}

export const getALlCampaign = async()=>{
    const response = await axios.get(API_URL +`get-all-campaigns/?limit`, { headers: {...authHeader()} });
    return response.data
}

export const getCampaignWithLimit = async(limit)=>{
    const response = await axios.get(API_URL +`get-all-campaigns/?limit=${limit}`, { headers: {...authHeader()} })
    return response.data;
}

export const getCampaign = async(campaignId)=>{
        const res = await axios.get(API_URL + `details/${campaignId}`,  { headers: {...authHeader()} });
        return res.data[0];
}

export const updateCampaign = async(id, body)=>{
    const response = await axios.post(API_URL + `/update/${id}`, body, { headers: {...authHeader(), 'Content-Type': 'multipart/form-data'} });
    return response;
}