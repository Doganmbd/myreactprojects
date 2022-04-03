import React from 'react'
import Buttons from './Buttons'
import SurpriseButton from "./SurpriseButton"

const Container = () => {
  return (
    <div>
        <img src="" alt="" />
        <h5 className="name"> Name</h5>
        <h4 className="title">Job title</h4>
        <p className="describe">describe</p>

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