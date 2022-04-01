import React from 'react'

const Image = ({imagesProps}) => {
  return (
    <div>
    {imagesProps.map((item) => {
      return (
      <ul>
        <li>
          <img src={item.webformatURL} alt="mbd" /> 
        </li>
      </ul>
      )
    })}
  </div>
  )
}

export default Image