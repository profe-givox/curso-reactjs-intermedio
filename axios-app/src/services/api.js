import axios from "axios";

//Crear una instancia de Axios
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
});

export default api;