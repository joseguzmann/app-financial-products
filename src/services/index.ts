import axios, { AxiosInstance } from 'axios';
import { BACKEND_URL } from '@env';

const validateEnvVariables = () => {
    if (!BACKEND_URL) {
        throw new Error('The environment variable BACKEND_URL is not defined.');
    }
};

validateEnvVariables();

const axiosClient: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
});

export default axiosClient;
