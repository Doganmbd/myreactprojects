import React from 'react'


const Card = (item) => {
  return (
 
      <div className="card-container">
          <div className="title">
            <h1 >{item.title}</h1>
          </div>

          <img src={item.image} alt="" />
          
        
          <div className="card-over">
            <p>{item.desc}</p> 
          </div>
      </div>
    
    
  )
}

export default Card