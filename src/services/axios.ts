import axios from 'axios';

const unloggedAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //withCredentials: true,
  }
});


const loggedAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Interceptar requisições para adicionar o token de autenticação
loggedAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Supondo que o token é armazenado no localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptar respostas para lidar com erros de autenticação
loggedAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Lógica para lidar com erros de autenticação, como redirecionar para login
      console.log('Token expirado ou não autorizado');
      // Exemplo: Redirecionar para a página de login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export { unloggedAxios, loggedAxios };
