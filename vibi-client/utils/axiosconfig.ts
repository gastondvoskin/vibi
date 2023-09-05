import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/', // URL base para todas las solicitudes
    timeout: 5000, // Tiempo máximo de espera para una solicitud en milisegundos (opcional)
  });
  
  export default instance;