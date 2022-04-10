import React from 'react'

const AddTask = ({handleClickButton}) => {
  return (
      

    <div>
        {handleClickButton &&
    <form className="add-form">
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" 
            placeholder="Add task"
            id="task"
            name="task"
            required
            />
        </div>
        <div className="form-control">
            <label htmlFor="day">Day&Time</label>
            <input type="text" 
            placeholder="Add Day&Time"
            id="day"
            name="day"
            required
            />
        </div>
        <button className="btn btn-block" type="submit">Add Task</button>
    </form>
    
}
</div>

  )
}

export default AddTask