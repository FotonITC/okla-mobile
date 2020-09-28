import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://foton-it.com:8090/api',
});

instance.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWhlci5iZW5AZm90b24taXQuY29tIiwiaWF0IjoxNjAxMTI4ODI3LCJleHAiOjE2MDEyMTUyMjd9.ziyLaJ-5q9M1R0QWB34xdMYe1OITrcqQ7F1AsI69KezOi2nR8nlr-9EI1XPutYO7o0Smc8WKVLqr-bfKY_XU3w';
        return config;
    }, (err) => {
        return Promise.reject(err);
    });

export default instance;
