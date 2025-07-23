import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { login } from '../api/authApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth(); // Using useAuth

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   try {
  //     const { token, user } = await login(email, password);
  //     authLogin({ token, user });
      
  //     toast.success(`Welcome back, ${user.name}!`, {
  //       icon: '👋',
  //     });
  //     navigate('/members');
  //   } catch (error) {
  //     let errorMessage = 'Login failed. Please try again.';
      
  //     if (error.response) {
  //       errorMessage = error.response.data.message || errorMessage;
  //     } else if (error.message) {
  //       errorMessage = error.message;
  //     }
      
  //     toast.error(errorMessage);
  //     console.error('Login error:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const { token, user } = await login(email, password);
    authLogin({ token, user });
    navigate('/members');
  } catch (error) {
    let errorMessage = 'Login failed';
    
    if (error.response) {
      // Backend returned an error
      errorMessage = error.response.data?.message || 
                    `Server error (${error.response.status})`;
      
      // Special handling for 500 errors
      if (error.response.status === 500) {
        errorMessage = 'Server error - please try again later';
        console.error('Backend 500 error details:', error.response.data);
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    toast.error(errorMessage);
    console.error('Login error details:', error);
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            isLoading
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center text-sm text-gray-600 pt-2">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;