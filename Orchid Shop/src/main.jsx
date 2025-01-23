import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Contact from './pages/cotact.jsx';
import Introduction from './pages/introduction.jsx';
import LogIn from "./pages/LogIn/Login.jsx";
import Register from "./pages/Register/Register.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },
  { path: "/introduction", element: <Introduction /> },
  { path: "/login", element: <LogIn /> },
  { path: "/Register", element: <Register /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)