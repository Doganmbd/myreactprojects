import {Router,Route,Routes} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./component/Home";


function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/home" component={Home}/>
      </Routes>
     
    </div>

    </Router>
  );
}

export default App;
