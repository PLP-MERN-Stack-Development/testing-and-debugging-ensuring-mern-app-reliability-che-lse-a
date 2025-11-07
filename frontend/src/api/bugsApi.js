import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api' });
export const fetchBugs = () => api.get('/bugs').then(r=>r.data);
export const createBug = payload => api.post('/bugs', payload).then(r=>r.data);
export const updateBug = (id,payload) => api.patch(`/bugs/${id}`, payload).then(r=>r.data);
export const deleteBug = id => api.delete(`/bugs/${id}`).then(r=>r.data);
