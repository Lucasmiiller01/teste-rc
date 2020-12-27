import axios from 'axios';

const api = () => {
    return axios.create({
        baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    });
};

export default api;
