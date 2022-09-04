import axios from "axios";
import authHeader from "./auth-header";

export const deleteUser = async(id)=>{
    const response = await axios.get(`http://localhost:4000/v1/admin/deletedUser/${id}`,  { headers: {...authHeader()} });
    return response;
}