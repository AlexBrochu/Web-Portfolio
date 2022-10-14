import axios from "axios";
console.log(process.env.PORTFOLIO_BASE_URL);

const instance = axios.create({
  baseURL: process.env.PORTFOLIO_BASE_URL,
});

export default instance;
