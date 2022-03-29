import Item from "../item/Item";
import {languages} from "../../data/data"
import "./Card.css"


const CardDiv = () => {
    return(
        <div className="card-container">

            <h1 className="title">Languages</h1>
        <div className="container">
           {languages.map((item,index) => {
               return(
               <Item cardItem={item} key={index} />
               )
           })}
           
        </div>
        </div>



    )
}

export default CardDiv ;