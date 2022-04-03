import React,{useState} from 'react'
import Buttons from './Buttons'
import SurpriseButton from "./SurpriseButton"
import reviews from "./data";
import { ReactComponent as PrevIcon } from "../svgs/previous.svg";

const Container = () => {


    
    const [index,setIndex] = useState(0)
    const [change,setChange] = useState(reviews[index])


    const handlePrev = ()=> {
        setIndex((index)=> {
            let newHandlePrev = index - 1
            return newHandlePrev
        })
        
    }

    const handleNext = ()=> {
        setIndex((index)=> {
            let newHandleNext = index + 1
            return newHandleNext
        })
    }

    console.log(index);
    

  return (
    <div>
        <img src={change.image} alt="bilal" />
        <h5 className="name"> {change.name}</h5>
        <h4 className="title">{change.job}</h4>
        <p className="describe">{change.text}</p>
        
        <div className="buttons">
            <Buttons clickPrev={handlePrev} clickNext={handleNext}/>
        </div>
        <div className="buttonsTwo">
          <SurpriseButton/>
      </div>
    </div>
  )
}

export default Container