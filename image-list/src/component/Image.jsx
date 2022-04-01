import React from 'react'

const Image = ({imagesProps}) => {
  return (
    <div>
    {imagesProps.map((item) => {
      return (
      <ul key={item.id}>
        <li>
          <img className="ui  centered x-large circular image"  src={item.webformatURL} alt="mbd" /> 
          
        </li>
      </ul>
      )
    })}
  </div>
  )
}

export default Image