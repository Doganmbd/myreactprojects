
import './App.css';
import CardPlan from './component/card/Card';
import HeaderApp from './component/header/Header';


function App() {
  const handleClick = (id) => {
    
  }
  return (
    <div className="App">
      <HeaderApp handleClick = {handleClick} />
      <CardPlan />
      
    </div>
  );
}

export default App;
