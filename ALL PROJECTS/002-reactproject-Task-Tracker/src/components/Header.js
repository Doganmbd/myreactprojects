import {useState} from 'react';
import AddTask from './AddTask';
import Button from './Button';



const Header = ( ) => {

  const [addTask, setAddTask] = useState(true)

    const handleClickButton = ()=> {
        setAddTask(!addTask)
    }


  return (
    <div className="header">
        <h1>Task Tracker</h1>
        <Button 
        text = "Add Task Tracker"
        color="purple"
        handleClickButton={handleClickButton}
        
        />
        <AddTask handleClickButton={addTask}  />
    </div>
  )
}

export default Header