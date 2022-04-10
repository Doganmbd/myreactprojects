import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import veri from "../src/components/Data";
import Task from "./components/Task";
import AddTask from "./components/AddTask";


function App() {
  const [data, setData] = useState(veri)


const deleteDiv = (itemId) => {

  setData(data.filter((allData)=> {
    return(
      allData.id !== itemId
    )
  }))

}

  return (
    <div className="container">
      <Header />
      
      <Task deleteDiv={deleteDiv} data={data}/>
      
    </div>
  );
}

export default App;
