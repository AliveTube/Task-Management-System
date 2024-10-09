import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './components/About Us/AboutUs'
import Landing from './components/Landing/Landing'
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import { Provider } from 'react-redux'
import { store } from './ReduxStore/store.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    {index: true, element: <Landing />},
    {path: 'about', element: <AboutUs />},
  ]},
  {path:'register', element: <RegisterPage></RegisterPage>},
  { path: '*', element: <Error /> }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
