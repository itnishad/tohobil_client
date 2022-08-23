//8/8/2022
import axios from "axios";

const API_URL = 'http://localhost:4000/v1/auth/';


export const registration = async(body) =>{
    
     const response = await axios.post(API_URL + 'register', body);

     if(response.data.Token){
        localStorage.setItem('user', JSON.stringify(response.data))
     }
     
     return response;
     
}

export const login = async(body) =>{
    // const response = await axios.post(API_URL + 'login', headers, body);
    const response = await axios.post('http://localhost:4000/v1/auth/login', body);

    if(response.data.Token){
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))
     }
     
     return response.data;
}

export const logout = ()=>{

    localStorage.removeItem("user");
}

export const getUser = ()=>{
    return JSON.parse(localStorage.getItem('user'));
}

