import './App.css'

import AboutUs from './components/About Us/AboutUs';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Profile from './components/Profile/Profile';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
