
import React from 'react';

const Topbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600 text-lg">Welcome, <span className="font-semibold">Admin</span></span>
        
      </div>
    </div>
  );
};

export default Topbar;
