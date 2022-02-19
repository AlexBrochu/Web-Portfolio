import axios from "axios";
import { environment } from "./config/environment";
// TODO use environment to set baseURL
const instance = axios.create({
  baseURL: "http://nginx-proxy",
});

export default instance;
