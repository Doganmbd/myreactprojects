import {BrowserRouter as  Router,Routes,Route,Link} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/Error";
import UserName from "./component/UserName";


function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Go to home page</Link>
        <br />
        <Link to="/about">about</Link>
        <br />
        <Link to="/contact">contact</Link>
      </nav>
    <div className="App">
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/:username" element={<UserName/>}/>
      
      <Route path="*" element={<Error/>} />
      </Routes>
     
    </div>

    </Router>
  );
}

export default App;
