import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://foton-it.com:8090/api',
});

export default instance;
