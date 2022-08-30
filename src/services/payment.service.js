import axios from "axios";
import authHeader from "./auth-header";

const url = "http://localhost:4000/v1/payment/init/";

export const paymentSubmit = async (user, param, body)=>{
    const response = await axios.post (url + `${user}/` + `${param}`, body, { headers: {...authHeader()} })
    return response.data;
}