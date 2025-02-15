import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Introduction from './pages/Introduction.jsx';
import LogIn from "./pages/LogIn/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import ProductPage from './components/ProductPage/ProductPage.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/introduction", element: <Introduction /> },
  { path: "/login", element: <LogIn /> },
  { path: "/Register", element: <Register /> },
  { path: "/product/:id", element: <ProductPage /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)