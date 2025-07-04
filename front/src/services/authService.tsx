import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const login = (formData: { identifier: string; password: string }) => {
    return axios.post(`${baseURL}/api/login`, formData);
};