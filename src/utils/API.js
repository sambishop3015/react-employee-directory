import axios from "axios";

export const API = () => {
    return axios.get("https://randomuser.me/api/?results=100&nat=us")
}; 

