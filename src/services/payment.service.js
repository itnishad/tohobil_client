import axios from "axios";
import authHeader from "./auth-header";

const url = "http://localhost:4000/v1/payment/";


export const paymentSubmit = async (user, param, body)=>{
    const response = await axios.post (url + `init/${user}/${param}`, body, { headers: {...authHeader()} })
    return response.data;
}

export const getCampaignPaymentHistory = async (campaignId)=>{
    const response = await axios.get(url + `history/${campaignId}`, { headers: {...authHeader()} });
    // console.log(response)
    return response.data;
}