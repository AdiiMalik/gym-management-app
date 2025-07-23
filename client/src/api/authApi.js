


// // // export const login = async (email, password) => {
// // //   const response = await axios.post('/auth/login', { email, password });
// // //   return {
// // //     token: response.data.token,
// // //     user: response.data.user
// // //   };
// // // };
// // // export const login = async (email, password) => {
// // //   const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
// // //     email,
// // //     password,
// // //   });

// // //   // ✅ Log to confirm user.name is available
// // //   console.log("🔐 Login success:");
// // //   console.log("🧑 user:", res.data.user);
// // //   console.log("📛 user.name:", res.data.user?.name);

// // //   return {
// // //     token: res.data.token,
// // //     user: res.data.user,
// // //   };
// // // };
// // // import axios from 'axios';
// // // export const login = async (email, password) => {
// // //   const response = await axios.post(
// // //     `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, // Note the /api prefix
// // //     { email, password }
// // //   );
// // //   return response.data;
// // // };

// // // export const register = async (userData) => {
// // //   const response = await axios.post(
// // //     `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
// // //     userData
// // //   );
// // //   return response.data;
// // // };


// // // export const updateAccount = async (data) => {
// // //   const token = localStorage.getItem('token');
// // //   const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/auth/update`, data, {
// // //     headers: { Authorization: `Bearer ${token}` },
// // //   });
// // //   return res.data;
// // // };
// // // import axios from 'axios';

// // // const api = axios.create({
// // //   baseURL: import.meta.env.VITE_API_BASE_URL,
// // // });

// // // // Helper function for requests
// // // const makeRequest = async (method, url, data = null) => {
// // //   try {
// // //     const config = {
// // //       method,
// // //       url,
// // //       data
// // //     };
// // //     const token = localStorage.getItem('token');
// // //     if (token) {
// // //       config.headers = { Authorization: `Bearer ${token}` };
// // //     }
// // //     const response = await api(config);
// // //     return response.data;
// // //   } catch (error) {
// // //     console.error('API Error:', error);
// // //     throw error;
// // //   }
// // // };

// // // // Named exports (original style)
// // // export const login = (email, password) => {
// // //   return makeRequest('post', '/auth/login', { email, password });
// // // };

// // // export const register = (userData) => {
// // //   return makeRequest('post', '/auth/register', userData);
// // // };

// // // export const updateAccount = (data) => {
// // //   return makeRequest('put', '/auth/update', data);
// // // };

// // // Example usage:
// // // import { authApi } from './authApi';
// // // const { user } = await authApi.login(email, password);

// // //lastttt version
// // import axios from 'axios';

// // const api = axios.create({
// //   baseURL: import.meta.env.VITE_API_BASE_URL,
// //   timeout: 10000, // 10 second timeout
// //   headers: {
// //     'Content-Type': 'application/json'
// //   }
// // });

// // // Enhanced request handler with better error reporting
// // const makeRequest = async (method, url, data = null) => {
// //   try {
// //     const config = {
// //       method,
// //       url,
// //       data,
// //       validateStatus: function (status) {
// //         return status >= 200 && status < 500; // Reject only if status is >= 500
// //       }
// //     };

// //     const token = localStorage.getItem('token');
// //     if (token) {
// //       config.headers = { 
// //         ...config.headers,
// //         Authorization: `Bearer ${token}` 
// //       };
// //     }

// //     const response = await api(config);
    
// //     // If the response contains an error message
// //     if (response.data?.error) {
// //       throw {
// //         message: response.data.error,
// //         status: response.status,
// //         responseData: response.data
// //       };
// //     }

// //     return response.data;

// //   } catch (error) {
// //     console.error('API Request Failed:', {
// //       endpoint: `${method.toUpperCase()} ${url}`,
// //       error: error.response?.data || error.message,
// //       status: error.response?.status,
// //       config: error.config
// //     });

// //     // Transform the error for consistent handling
// //     const apiError = new Error(
// //       error.response?.data?.message || 
// //       error.message || 
// //       'Request failed'
// //     );
// //     apiError.status = error.response?.status;
// //     apiError.data = error.response?.data;
// //     throw apiError;
// //   }
// // };

// // // Auth API endpoints
// // export const authApi = {
// //   login: async (email, password) => {
// //     try {
// //       const data = await makeRequest('post', '/auth/login', { email, password });
// //       console.debug('Login response:', data); // Debug log
// //       return data;
// //     } catch (error) {
// //       console.error('Login failed:', error);
// //       throw error;
// //     }
// //   },

// //   register: async (userData) => {
// //     try {
// //       const data = await makeRequest('post', '/auth/register', userData);
// //       console.debug('Registration response:', data);
// //       return data;
// //     } catch (error) {
// //       console.error('Registration failed:', error);
// //       throw error;
// //     }
// //   },

// //   updateAccount: async (updateData) => {
// //     try {
// //       const data = await makeRequest('put', '/auth/update', updateData);
// //       console.debug('Update response:', data);
// //       return data;
// //     } catch (error) {
// //       console.error('Update failed:', error);
// //       throw error;
// //     }
// //   }
// // };

// // // Alternative named exports for simpler usage
// // export const login = authApi.login;
// // export const register = authApi.register;
// // export const updateAccount = authApi.updateAccount;
// // authApi.js
// import axios from 'axios';




// // Request interceptor for auth token
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Response interceptor for error handling
// api.interceptors.response.use(
//   response => response,
//   error => {
//     const errorMessage = error.response?.data?.message || 
//                        error.message || 
//                        'Request failed';
//     console.error('API Error:', {
//       url: error.config.url,
//       status: error.response?.status,
//       message: errorMessage
//     });
//     return Promise.reject(error);
//   }
// );

// // Auth API functions
// // export const login = async (email, password) => {
// //   const response = await api.post('/auth/login', { email, password });
// //   return response.data;
// // };

// // export const register = async (userData) => {
// //   const response = await api.post('/auth/register', userData);
// //   return response.data;
// // };

// // export const updateAccount = async (updateData) => {
// //   const response = await api.put('/auth/update', updateData);
// //   return response.data;
// // };



// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   timeout: 10000,
// });

// // Auth endpoints
// export const login = async (email, password) => {
//   const response = await api.post('/auth/login', { email, password });
//   return response.data;
// };

// export const register = async (userData) => {
//   const response = await api.post('/auth/register', userData);
//   return response.data;
// };

// export const updateAccount = async (data) => {
//   const response = await api.put('/auth/update', data);
//   return response.data;
// };

import axios from 'axios';

// Configure axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to inject auth token
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for consistent error handling
api.interceptors.response.use(
  response => {
    // Log successful responses in development
    if (import.meta.env.DEV) {
      console.debug('API Success:', {
        url: response.config.url,
        status: response.status,
        data: response.data
      });
    }
    return response;
  },
  error => {
    // Enhanced error logging
    const errorInfo = {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      error: error.response?.data || error.message
    };

    console.error('API Error:', errorInfo);

    // Transform error for consistent handling
    const apiError = new Error(errorInfo.message);
    apiError.status = errorInfo.status;
    apiError.data = error.response?.data;
    throw apiError;
  }
);

/**
 * Authentication API Service
 */
const authService = {
  /**
   * Login user
   * @param {string} email 
   * @param {string} password 
   * @returns {Promise<{token: string, user: object}>}
   */
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  /**
   * Register new user
   * @param {object} userData 
   * @returns {Promise<{token: string, user: object}>}
   */
  async register(userData) {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  /**
   * Update user account
   * @param {object} updateData 
   * @returns {Promise<{user: object}>}
   */
  async updateAccount(updateData) {
    const response = await api.put('/auth/update', updateData);
    return response.data;
  }
};

// Named exports for direct usage
export const login = authService.login;
export const register = authService.register;
export const updateAccount = authService.updateAccount;

// Default export as authService
export default authService;