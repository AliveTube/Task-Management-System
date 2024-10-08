import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './components/About Us/AboutUs'
import Landing from './components/Landing/Landing'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    {index: true, element: <Landing />},
    {path: 'about', element: <AboutUs />},
  ]},
  { path: '*', element: <Error /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
