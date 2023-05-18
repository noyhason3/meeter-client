import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3333', // Replace with your server URL
});

export default apiClient;
