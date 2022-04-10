import React from 'react';
import {TiDelete} from "react-icons/ti"

const Duty = ({data,deleteDiv}) => {
  return (
    <div>
        {data.map((item)=> {
            return(
                <div key={item.id} className="task">
                    <h3>{item.text} <TiDelete 
                    
                    onClick={()=> deleteDiv(item.id)}
                    style={{color:"red", fontSize:"2rem"}}/> </h3>
                    <p>{item.day} </p>
                    
                </div>
            )
        })}
        
    </div>
  )
}

export default Duty