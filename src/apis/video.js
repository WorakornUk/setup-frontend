import axios from './config/axios.config';

const videoApi = {};

videoApi.getVideo = () => axios.get('/');
videoApi.addVideo = body => axios.post('/add', body);
videoApi.deleteVideo = id => axios.delete(`/delete/${id}`)
// authApi.login = body => axios.post('/auth/login', body);

export default videoApi;
