import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import About from "./components/About";
import User from "./components/User";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/user/:id" element={<User/>}/>
      </Routes>
    </Router>
  );
}

export default App;
