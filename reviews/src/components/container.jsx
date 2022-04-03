import React,{useState} from 'react'
import Buttons from './Buttons'
import SurpriseButton from "./SurpriseButton"
import reviews from "./data";
import { ReactComponent as PrevIcon } from "../svgs/previous.svg";

const Container = () => {


    
    const [index,setIndex] = useState(0)
    // const [change,setChange] = useState(reviews[index])
    const [change,setChange] = useState(reviews)

    console.log(change);

    const {image,name,job,text} =change[index]


    const handlePrev = ()=> {
        setIndex((b)=> {
            let newHandlePrev = b - 1
            return newHandlePrev
        })
        
    }

    const handleNext = ()=> {
        setIndex((a)=> {
            let newHandleNext = a + 1
            return newHandleNext
        })
    }

    console.log(index);

    

  return (
    <div>
        <img src={image} alt="bilal" />
        <h5 className="name"> {name}</h5>
        <h4 className="title">{job}</h4>
        <p className="describe">{text}</p>
        
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