import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL || "https://api-notes-5azq.onrender.com/api",
});

export default instance;
