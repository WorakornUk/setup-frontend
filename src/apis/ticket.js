import axios from './config/axios.config';

const ticketApi = {};

ticketApi.getTickets = () => axios.get('/ticket');
ticketApi.getTicketById = id => axios.get(`/ticket/${id}`)

ticketApi.createTicket = body => axios.get('/ticket/create', body)

// showsApi.addShow = body => axios.post('/add', body);
// showsApi.deleteShow = id => axios.delete(`/delete/${id}`)

export default ticketApi;