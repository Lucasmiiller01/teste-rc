import axios from 'axios';

const api = () => {
    return axios.create({
        baseURL: '...',
    });
};

export default api;
