import React  from 'react';


import "./Item.css"

const Item = ({cardItem}) => {




  return (
    <div className="item-container">
        <img className="item-img" src={cardItem.img} alt="" />
        <h3 className="item-title">{cardItem.name}</h3>



    </div>
  )
}

export default Item;