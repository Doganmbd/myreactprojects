import React from 'react';
import Duty from './Duty';


const Task = ({data,deleteDiv}) => {
  return (
    <div >

        
       <Duty deleteDiv={deleteDiv} data={data}/>
        
    </div>
  )
}

export default Task