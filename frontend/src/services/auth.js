import axios from 'axios';

const authService = {
    login: (credentials) => {
        return axios.post('/api/auth/login', credentials);
    },
    signup: (userData) => {
        return axios.post('/api/auth/signup', userData);
    }
};

export default authService;
