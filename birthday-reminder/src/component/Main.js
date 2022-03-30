import React from 'react';
import "./main.css"

const Main = ({dataProps}) => {
    
  return (
    <div className="container">

    {
        dataProps.map((item) => {

            const {id,name,age,image}=item ;
            return(
            <div className="container-item" key = {id}>
                <div>
                
                </div>
                <div className="information">
                <img className="img" src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{age}</p>

                </div>

            </div>
            )
        })
    }
  </div>
  )
}

export default Main