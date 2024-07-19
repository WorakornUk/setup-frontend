import axios from './config/axios.config';

const authApi = {};

authApi.register = body => axios.post('/auth/register', body);
authApi.login = body => axios.post('/auth/login', body);
authApi.getProfile = () => axios.get('/auth/profile');

export default authApi;
