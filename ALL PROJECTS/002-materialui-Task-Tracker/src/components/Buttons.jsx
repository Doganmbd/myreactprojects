import React from 'react';
import Button from '@mui/material/Button';


const Buttons = ({handleButtonClick} ) => {


  return (
    <div>
        <Button onClick={handleButtonClick} variant="contained">Close Add Task Bar</Button>
    </div>
  )
}

export default Buttons