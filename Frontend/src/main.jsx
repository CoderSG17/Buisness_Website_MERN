import React from 'react';
// import ReactDOM from 'react-dom'; 
import "./index.css"
import App from './App';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
         draggable
          theme="light"
          bodyClassName="toastBody"
       
/>
      </BrowserRouter>

    </React.StrictMode>
  </AuthProvider>
);