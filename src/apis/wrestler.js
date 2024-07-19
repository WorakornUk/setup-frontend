import axios from "./config/axios.config";

const wrestlerApi = {}

wrestlerApi.getWrestler = () => axios.get('/wrestlers')
wrestlerApi.addWrestler = body => axios.post('/wrestlers/add')
wrestlerApi.deleteWrestler = id => axios.delete(`/wrestlers/delete/${id}`)

export default wrestlerApi;