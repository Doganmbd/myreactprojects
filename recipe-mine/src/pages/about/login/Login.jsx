import React from 'react';
import {LoginContainer,FormContainer,FormHeader,FormInput,FormButton,SubmitForm} from "./LoginStyle";


const Login = () => {

  const handleSubmitForm = (e)=>{
    e.preventDefault();
    window.location.href = "/";
    
  }


  return (
    <LoginContainer>
        <FormContainer>
          {/* <SvgImage src={mealSvg}/> */}
          <FormHeader>
              M.B.D Recipe
          </FormHeader>
          <SubmitForm onSubmit={handleSubmitForm}>
              <FormInput type="text" placeholder="username" required></FormInput>
              <FormInput type="password" placeholder="password" required></FormInput>
              <FormButton>
                Login
              </FormButton>
          </SubmitForm>
        </FormContainer>
    </LoginContainer>
  )
}

export default Login