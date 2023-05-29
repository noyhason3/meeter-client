import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

const apiClient = axios.create({
    baseURL: apiUrl, // Replace with your server URL
    headers: {
        'Access-Control-Allow-Origin': 'https://meeter-client.netlify.app',
    },
});

export default apiClient;
