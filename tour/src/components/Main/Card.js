import React from 'react'

const Card = (item) => {
  return (
    <div className="container">
      <div className="card-container">
        <h1>{item.title}</h1>
        <img src={item.image} alt="" />
      </div>
      <p>{item.desc}</p>

    </div>
  )
}

export default Card