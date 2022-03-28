import React from 'react'
import {Data} from "../../helper/data"
import Card from './Card'
import "./Main.scss"

const Main = () => {
    
  return (
      
    <div className="container">
        

      {Data.map((item,index) => <Card {...item} />
       

      )}
     
    </div>
  )
}

export default Main