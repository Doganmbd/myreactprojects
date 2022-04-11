import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


        

export default function InputText({onClickButtonInput, sendForm}) {

const [text, setText] = useState("") ;
const [day, setDay] = useState("")

const handleChangeInput = (e) => {
    setText(e.target.value)
    setDay(e.target.value)
    
}

const handleSubmitForm = () => {

}

  return (
    <form 
    onSubmit={handleSubmitForm}>
    <box
    
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          placeholder="Hello World"
          variant="standard"
          onChange={handleChangeInput}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          placeholder="Hello World"
          variant="standard"
          onChange={handleChangeInput}
        />

    <Button type="submit" onClick={onClickButtonInput} variant="contained">Save Task</Button>
       
      </div>
    </box>
    </form>
  );
}