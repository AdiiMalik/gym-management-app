import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Members from './pages/Members.jsx';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import LogoutButton from './components/LogoutButton.jsx';
import { useLocation } from "react-router-dom";
import Register from './pages/Register.jsx';

const App = () => {
  const location = useLocation();
  const hideLogout = location.pathname === "/login";
  return (

    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">

       <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
  <div className="flex items-center space-x-2">
    <span className="text-2xl font-extrabold text-blue-600">Gym</span>
    <span className="text-2xl font-extrabold text-gray-700">Manager</span>
    <span className="text-sm text-gray-500 font-medium hidden sm:inline">Dashboard</span>
  </div>
  {!hideLogout && <LogoutButton />}
</header>

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/members"
              element={
                <PrivateRoute>
                  <Members />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />

          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
