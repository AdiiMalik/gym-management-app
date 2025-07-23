


// export const login = async (email, password) => {
//   const response = await axios.post('/auth/login', { email, password });
//   return {
//     token: response.data.token,
//     user: response.data.user
//   };
// };
// export const login = async (email, password) => {
//   const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
//     email,
//     password,
//   });

//   // ✅ Log to confirm user.name is available
//   console.log("🔐 Login success:");
//   console.log("🧑 user:", res.data.user);
//   console.log("📛 user.name:", res.data.user?.name);

//   return {
//     token: res.data.token,
//     user: res.data.user,
//   };
// };
// import axios from 'axios';
// export const login = async (email, password) => {
//   const response = await axios.post(
//     `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, // Note the /api prefix
//     { email, password }
//   );
//   return response.data;
// };

// export const register = async (userData) => {
//   const response = await axios.post(
//     `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
//     userData
//   );
//   return response.data;
// };


// export const updateAccount = async (data) => {
//   const token = localStorage.getItem('token');
//   const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/auth/update`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   return res.data;
// };
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Helper function for requests
const makeRequest = async (method, url, data = null) => {
  try {
    const config = {
      method,
      url,
      data
    };
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }
    const response = await api(config);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Named exports (original style)
export const login = (email, password) => {
  return makeRequest('post', '/auth/login', { email, password });
};

export const register = (userData) => {
  return makeRequest('post', '/auth/register', userData);
};

export const updateAccount = (data) => {
  return makeRequest('put', '/auth/update', data);
};

// Example usage:
// import { authApi } from './authApi';
// const { user } = await authApi.login(email, password);