//8/8/2022
import axios from "axios";
import authHeader from "./auth-header";

export const getUserProfile = async(...args)=>{
    const response = await axios.get(args[0],  { headers: {...authHeader()} })
    return response.data;
}

export const updateUserProfile = async(body)=>{
    const response = await axios.post("http://localhost:4000/v1/user/profile/update", body, { headers: {...authHeader()} });
    return response;
}