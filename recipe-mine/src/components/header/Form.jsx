import React from 'react';
import {FormContainer,FormInput,FormButton} from "./HeaderStyle";


const Form = () => {
  return (

    <FormContainer>
      <FormInput
      type="text"
      placeholder="search"
      >

      </FormInput>

      <FormButton>
        Search
      </FormButton>


    </FormContainer>
  )
}

export default Form