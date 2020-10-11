import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://foton-it.com:8090/api',
});

instance.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjAyNDMzODcwLCJleHAiOjE2MDI1MjAyNzB9.yueQbnW_QPSJyn9ymp8r8sA-Hhu19t8wLABisMYRCnnJLC6hp_YWoeBnThLXP-dG6FAEYNafLnO_Qa0MErvujg';
        return config;
    }, (err) => {
        return Promise.reject(err);
    });

export default instance;
