// import React from 'react'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useAuth } from './context/AuthContext.jsx'
// import Sidebar from './components/Sidebar.jsx'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import Members from './pages/Members.jsx'
// import PrivateRoute from './components/PrivateRoute.jsx'
// import LogoutButton from './components/LogoutButton.jsx'
// import Settings from './pages/Settings.jsx'

// const App = () => {
//   const location = useLocation()
//   const { user } = useAuth()
//   const hideSidebar = ['/login', '/register'].includes(location.pathname)

//   return (
//     <div className="flex h-screen">
//       {!hideSidebar && <Sidebar />}

//       <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
//         <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-extrabold text-blue-600">Gym</span>
//             <span className="text-2xl font-extrabold text-gray-700">Manager</span>
//           </div>

//           {user.name&& (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-gray-600">
//                 Logged in as: <strong>{user.name}</strong>
//               </span>
//               <LogoutButton />
//             </div>
//           )}
//         </header>

//         <main className="flex-1 p-6">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//             <Route path="/members" element={<PrivateRoute><Members /></PrivateRoute>} />
//             <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
//           </Routes>
//         </main>
//       </div>

//       {/* Toasts are globally available */}
//       <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//     </div>
//   )
// }

// export default App
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from './context/AuthContext.jsx'
import Sidebar from './components/Sidebar.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Members from './pages/Members.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import LogoutButton from './components/LogoutButton.jsx'
import Settings from './pages/Settings.jsx'

const App = () => {
  const location = useLocation()
  const { user } = useAuth()
  const hideSidebar = ['/login', '/register'].includes(location.pathname)

  return (
    <div className="flex h-screen">
      {!hideSidebar && <Sidebar />}

      <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
        <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold text-blue-600">Gym</span>
            <span className="text-2xl font-extrabold text-gray-700">Manager</span>
          </div>

          {user?.name && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                Logged in as: <strong>{user.name}</strong>
              </span>
              <LogoutButton />
            </div>
          )}
        </header>

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/members" element={<PrivateRoute><Members /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
          </Routes>
        </main>
      </div>

      {/* Toasts are globally available */}
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
    </div>
  )
}

export default App
