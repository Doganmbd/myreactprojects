import React from 'react'

const Button = ({text,color,handleClickButton}) => {
  return (
    <div>
        <button className="btn" style = {{backgroundColor:color}} onClick={handleClickButton}>
            {text}
        </button>
    </div>
  )
}

export default Button