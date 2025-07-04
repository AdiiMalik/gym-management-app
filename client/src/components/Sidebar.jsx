// import React from 'react';
// import { Link } from 'react-router-dom';


// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-900 text-white flex flex-col justify-between p-6">
//       <div>
//         <h1 className="text-2xl font-bold mb-8">Gym Admin</h1>
//         <ul className="space-y-4">
//           <li><Link to="/" className="hover:underline">Dashboard</Link></li>
//           <li><Link to="/members" className="hover:underline">Members</Link></li>
//           <li><Link to="/settings" className="hover:underline">Settings</Link></li>
//         </ul>
//       </div>

    
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Settings as SettingsIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
      <div className="px-6 py-5 border-b">
        <h1 className="text-2xl font-extrabold text-blue-600">Gym<span className="text-gray-700">Manager</span></h1>
      </div>
      <nav className="flex-1 flex flex-col py-4 space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
              isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`
          }
        >
          <Home className="mr-3 w-5 h-5" />
          Dashboard
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
              isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`
          }
        >
          <Users className="mr-3 w-5 h-5" />
          Members
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
              isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`
          }
        >
          <SettingsIcon className="mr-3 w-5 h-5" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Home, Users, Settings as SettingsIcon, LogOut } from 'lucide-react';
// import LogoutButton from './LogoutButton';

// const Sidebar = () => {
//   return (
//     <aside className="bg-white w-64 p-6 shadow-md flex flex-col justify-between">
//       <div className="space-y-6">
//         <h2 className="text-3xl font-extrabold text-blue-600 mb-8">Gym<span className="text-gray-800">Pro</span></h2>

//         <NavLink to="/" className={({ isActive }) => `flex items-center p-3 rounded hover:bg-blue-50 transition ${isActive ? 'bg-blue-100' : ''}`}>
//           <Home size={22} color="#2563EB" className="mr-3" />
//           <span className="text-gray-700 font-medium">Dashboard</span>
//         </NavLink>

//         <NavLink to="/members" className={({ isActive }) => `flex items-center p-3 rounded hover:bg-blue-50 transition ${isActive ? 'bg-blue-100' : ''}`}>
//           <Users size={22} color="#16A34A" className="mr-3" />
//           <span className="text-gray-700 font-medium">Members</span>
//         </NavLink>

//         <NavLink to="/settings" className={({ isActive }) => `flex items-center p-3 rounded hover:bg-blue-50 transition ${isActive ? 'bg-blue-100' : ''}`}>
//           <SettingsIcon size={22} color="#DC2626" className="mr-3" />
//           <span className="text-gray-700 font-medium">Settings</span>
//         </NavLink>
//       </div>

//       <div className="border-t border-gray-200 mt-6 pt-6">
//         <button onClick={() => LogoutButton.handleLogout()} className="flex items-center p-3 rounded hover:bg-red-50 transition w-full">
//           <LogOut size={22} color="#DC2626" className="mr-3" />
//           <span className="text-red-600 font-medium">Logout</span>
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
