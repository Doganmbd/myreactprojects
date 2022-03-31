import React from 'react'


const Button = ({handleClickProp} ) => {

  
  return (
    <div>
          <button onClick={handleClickProp} style={{backgroundColor:"red", color:"white"} }>Clear All</button>
    </div>
  )
}

export default Button