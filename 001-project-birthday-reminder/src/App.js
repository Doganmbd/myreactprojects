import {useState} from "react";
import './App.css';
import Main from './component/Main';
import data from "./component/Data";
import Button from "./component/Button" ;

function App() {
/* console.log(data); */
const [dataState,setDataState] = useState(data)

const handleClick =  ()=> {
    setDataState([]);
}

  return (
    <div className="App">
      <h1>{dataState.length} birthday today </h1>
      <Main dataProps={dataState} />
      <Button  handleClickProp={handleClick}  />
      
    </div>
  );
}

export default App;
