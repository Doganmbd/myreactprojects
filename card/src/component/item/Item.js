import React , {useState} from 'react';


import "./Item.css"

const Item = ({cardItem}) => {

const [show,setShow] = useState(true)

  return (

    <div className="item-container" onClick= {()=> setShow(!show)}>
        {show ? (
        <div>
        <img className="item-img" src={cardItem.img} alt="" />
        <h3 className="item-title">{cardItem.name}</h3>
        </div> )
        :(

    <ul className="list">
        {
            cardItem.options.map((option,index)=> {
                return(
                    <li key={index} > {option}</li>
                )
            })
        }
    </ul>)
         }
    </div>

  )
}

export default Item;