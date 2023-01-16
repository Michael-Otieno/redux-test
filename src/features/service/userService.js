import axios from 'axios';

const API_URL = process.env.REACT_APP_API_ENDPOINT
const API_KEY = process.env.REACT_APP_SECRET_KEY;
const headers = { 'x-apikey':API_KEY};



export const getData = () => {
    return axios.get(`${API_URL}/sample`, { headers });
}

export const patchData = (id, data) => {
    return axios.patch(`${API_URL}/sample/${id}`, data, { headers });
}