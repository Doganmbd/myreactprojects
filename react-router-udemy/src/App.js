import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/card/:user" element={<Card/>}/>

              

        
      </Routes>
    </Router>
  );
}

export default App;
