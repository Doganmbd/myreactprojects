import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import DeleteButton from "./components/DeleteButton";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const [showAddTask, setShowAddTask] = useState(false);

  const baseUrl = "http://localhost:5000/tasks";

  //*CRUD create,read,update,delete

  //* fetch işlemleri

  //* read işlemi yapıyorum

/*   const fetchTasks = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    //* console.log(data); 
    setTasks(data)
  } catch (error) {
    alert(error);
  }
  }
   */

  //* fetch işlemleri axios ile yapıyorum
  const fetchTasks = async ()=> {
    // const response = await axios.get(baseUrl);
    // console.log(response.data);
    // console.log(response);
    //setTasks(response.data);
    const {data}= await axios.get(baseUrl);
    setTasks(data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);
  
  // ADD TASK
/*   const addTask = async (newTask)=> {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
    })
    await response.json();
    fetchTasks();
  } */

  const addTask =async (newTask)=> {
    const response = await axios.post(baseUrl,newTask);
    console.log(response)
    fetchTasks();
  }


/*   const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  }; */
  
  // DELETE TASK

  const deleteTask = async (deletedTaskId)=> {
    console.log(deletedTaskId);
    await axios.delete(`${baseUrl}/${deletedTaskId}`)
    fetchTasks();
  }


/*   const deleteTask = (deletedTaskId) => {
    // console.log("delete Task", deletedTaskId);
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  }; */

  // TOGGLE DONE

  const toggleDone = async (toggleDoneId) => {
    const { data } = await axios.get(`${baseUrl}/${toggleDoneId}`);
    console.log(toggleDoneId);
    console.log(data);
    // const updatedTask = { ...data, isDone: !data.isDone };
    // await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask);
    await axios.patch(`${baseUrl}/${toggleDoneId}`, { isDone: !data.isDone });
    fetchTasks();
  };


/*   const toggleDone = (toggleDoneId) => {
    // console.log("double click", toggleDoneId);
    setTasks(
      tasks.map((task) =>
        task.id === toggleDoneId ? { ...task, isDone: !task.isDone } : task
      )
    );
  }; */

  // TOGGLESHOW
  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header
        title="TASK TRACKER"
        showAddTask={showAddTask}
        toggleShow={toggleShow}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleDone={toggleDone} />
      ) : (
        <h2 style={{ textAlign: "center" }}>NO TASK TO SHOW</h2>
      )}
      <DeleteButton setTasks={setTasks} />
    </div>
  );
}

export default App;
