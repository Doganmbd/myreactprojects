import React from 'react';
import Button from './Button';


const Header = ( ) => {

    const handleClickButton = ()=> {
        console.log("buton tıkladım");
    }


  return (
    <div className="header">
        <h1>Task Tracker</h1>
        <Button 
        text = "Add Task Tracker"
        color="purple"
        handleClickButton={handleClickButton}
        
        />

    </div>
  )
}

export default Header