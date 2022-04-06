import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/about/home/Home';
import About from '../pages/about/About';
import Login from '../pages/about/login/Login';




const AppRouter = () => {
  return (
    <BrowserRouter>
    
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={<Login/>} />
            
        </Routes>

        
    </BrowserRouter>
  )
}

export default AppRouter