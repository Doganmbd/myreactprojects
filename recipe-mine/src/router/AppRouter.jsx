import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/about/home/Home';
import About from '../pages/about/About';




const AppRouter = () => {
  return (
    <BrowserRouter>
    
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
            
        </Routes>

        
    </BrowserRouter>
  )
}

export default AppRouter