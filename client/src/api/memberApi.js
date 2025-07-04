


//const BASE_URL = `${import.meta.env.VITE_API_BASE}/api/members`;
 
// export const getMembers = () => axios.get(BASE_URL);
// export const addMember = (data) => axios.post(BASE_URL, data);
// export const deleteMember = (id) => axios.delete(`${BASE_URL}/${id}`);
// export const updateMember = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
import axios from 'axios';


const API_URL = import.meta.env.VITE_API_BASE_URL + '/members';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

// Axios instance to attach interceptor once for all requests
const api = axios.create();

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.warn('Token expired or unauthorized, logging out...');
      localStorage.removeItem('token');
      window.location.href = '/login';  // redirect to login
    }
    return Promise.reject(error);
  }
);

export const getMembers = async () => {
  const res = await api.get(API_URL, { headers: getAuthHeaders() });
  return res.data;
};

export const addMember = async (memberData) => {
  const res = await api.post(API_URL, memberData, { headers: getAuthHeaders() });
  return res.data;
};

export const deleteMember = async (id) => {
  const res = await api.delete(`${API_URL}/${id}`, { headers: getAuthHeaders() });
  return res.data;
};

export const updateMember = async (id, memberData) => {
  const res = await api.put(`${API_URL}/${id}`, memberData, { headers: getAuthHeaders() });
  return res.data;
};
