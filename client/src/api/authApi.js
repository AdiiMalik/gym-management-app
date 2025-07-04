import axios from 'axios';

export const login = async (email, password) => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, { email, password });
  return res.data;
};
export const updateAccount = async (data) => {
  const token = localStorage.getItem('token');
  const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/auth/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};