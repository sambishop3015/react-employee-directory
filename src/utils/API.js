import axios from "axios";

export const API = () => {
    return axios.get("https://randomuser.me/api/?results=50&nat=us")
}; 

