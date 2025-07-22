import axios from 'axios';

export const login = async (email, password) => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
    email,
    password,
  });

  // ✅ Log to confirm user.name is available
  console.log("🔐 Login success:");
  console.log("🧑 user:", res.data.user);
  console.log("📛 user.name:", res.data.user?.name);

  return {
    token: res.data.token,
    user: res.data.user,
  };
};

export const updateAccount = async (data) => {
  const token = localStorage.getItem('token');
  const res = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/auth/update`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
