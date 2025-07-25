// //main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css' ; // Tailwind CSS
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from './context/AuthContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//    <BrowserRouter>
//    <AuthProvider>
//       <App />
//       </AuthProvider>
 //       <ToastContainer position="top-right" autoClose={3000} />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)