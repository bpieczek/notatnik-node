import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-notes-5azq.onrender.com",
});

export default instance;
