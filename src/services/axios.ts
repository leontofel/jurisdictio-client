import axios from 'axios';

const unloggedAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});



export {unloggedAxios};
