import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1/";
const Axios = axios.create();

Axios.defaults.baseURL = baseURL;
Axios.defaults.timeout = 10000;

export default Axios;