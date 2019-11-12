import axios from 'axios';
import https from 'https';

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL,
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export default api;
