import React from 'react'
import Buttons from './Buttons'
import SurpriseButton from "./SurpriseButton"

const Container = ({changeProps}) => {
  return (
    <div>
        <img src={changeProps.image} alt="" />
        <h5 className="name"> {changeProps.name}</h5>
        <h4 className="title">{changeProps.job}</h4>
        <p className="describe">{changeProps.text}</p>

        <div className="buttons">
            <Buttons/>
        </div>
        <div className="buttonsTwo">
          <SurpriseButton/>
      </div>
    </div>
  )
}

export default Container