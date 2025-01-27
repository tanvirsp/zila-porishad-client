import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes/Routes.jsx'
import 'react-loading-skeleton/dist/skeleton.css'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 // <React.StrictMode>
     <RouterProvider router={router} />
  //</React.StrictMode>,
)
