import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: true,
  withXSRFToken: true,
});

export default client;