import {useState} from "react";
import './App.css';
import Main from './component/Main';
import data from "./component/Data";

function App() {
/* console.log(data); */
  const [dataState,setDataState] = useState(data)

const handleClick =  ()=> {
    setDataState([]);
}

  return (
    <div className="App">
      <h1>{dataState.length} birthday today </h1>
      <Main dataProps={dataState}/>
      <button onClick={handleClick} style={{backgroundColor:"red", color:"white"} }>Clear All</button>
      
    </div>
  );
}

export default App;
