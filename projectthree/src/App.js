import logo from './logo.svg';
import './App.css';
import { useGlobalContext } from './components/Context';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const {hello} = useGlobalContext();
  return (
    <div>
      <Navbar/>
      <Main/>
      
    </div>
  );
}

export default App;
