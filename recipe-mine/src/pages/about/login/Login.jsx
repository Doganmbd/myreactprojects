import React from 'react';
import {LoginContainer,FormContainer,FormHeader,FormInput,FormButton,SvgImage} from "./LoginStyle";


const Login = () => {
  return (
    <LoginContainer>
        <FormContainer>
          {/* <SvgImage src={mealSvg}/> */}
          <FormHeader>
              M.B.D Recipe
          </FormHeader>
          <FormInput type="text" placeholder="username"></FormInput>
          <FormInput type="password" placeholder="password"></FormInput>
          <FormButton>
            Login
          </FormButton>
        </FormContainer>
    </LoginContainer>
  )
}

export default Login