import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ import Link here
import { login } from '../api/authApi'; // ✅ your login API function
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { token } = await login(email, password); // ✅ call your login API
  //     localStorage.setItem('token', token); // ✅ store token in localStorage
  //     toast.success('Login successful!');
  //     navigate('/members'); // ✅ redirect after login
  //   } catch (error) {
  //     console.error('❌ Login error:', error);
  //     toast.error(error?.response?.data?.message || 'Login failed.');
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await login(email, password); // returns token + user
    console.log("🔎 Login response:", response);

    const { token, user } = response; // guaranteed to exist after successful login

    localStorage.setItem('token', token);
    localStorage.setItem('adminEmail', user.email);

    toast.success(`Welcome, ${user.email}!`);
    navigate('/members');
  } catch (error) {
    console.error('❌ Login error:', error);
    toast.error(error?.response?.data?.message || 'Login failed.');
  }
};

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded shadow">
      <h1 className="text-2xl mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
