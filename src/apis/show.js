import axios from './config/axios.config';

const showsApi = {};

showsApi.getShows = () => axios.get('/shows');
showsApi.getShowById = id => axios.get(`/shows/${id}`)

// showsApi.addShow = body => axios.post('/add', body);
// showsApi.deleteShow = id => axios.delete(`/delete/${id}`)

export default showsApi;
