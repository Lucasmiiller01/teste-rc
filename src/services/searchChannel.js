import api from "./api";
import config from "../config/googleApi";


export const getAllChannel = async (q) => 
    api().request({
        url: `search/?key=${config.API_KEY}&q=${q}&type=${config.SEARCH_TYPE}&part=${config.SEARCH_PART}&maxResults=${config.SEARCH_MAX_RESULTS}`,
        method: 'GET'
    });