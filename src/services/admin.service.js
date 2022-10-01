import axios from "axios";
import authHeader from "./auth-header";

export const deleteUser = async(id)=>{
    const response = await axios.get(`http://localhost:4000/v1/admin/deletedUser/${id}`,  { headers: {...authHeader()} });
    return response;
}

export const getUserList = async() =>{
    const response = await axios.get(`http://localhost:4000/v1/user/getAllUser`, { headers: {...authHeader()} });
    return response.data;
}

export const inActiveCampaign = async(id)=>{
    const response = await axios.put(`http://localhost:4000/v1/admin/inActive/${id}`, { headers: {...authHeader()} });
    return response;
}

export const ActiveCampaign = async(id)=>{
    const response = await axios.put(`http://localhost:4000/v1/admin/Active/${id}`, { headers: {...authHeader()} });
    return response;
}

export const UserVerifiRequest = async(body)=>{
    const response = await axios.post("http://localhost:4000/v1/admin/user/verifiRequest",body);
    return response;
}

export const UserVerifiList = async()=>{
    const response = await axios.get("http://localhost:4000/v1/admin/all/verification");
    return response;
}

export const verifiedNow = async(campaignId)=>{
    console.log(authHeader());
    const response = await axios.put(`http://localhost:4000/v1/admin/verified/${campaignId}`, { headers: {...authHeader()} });
    return response;
}