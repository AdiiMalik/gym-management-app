// src/components/PrivateRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const PrivateRoute = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  return user ? children : <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivateRoute