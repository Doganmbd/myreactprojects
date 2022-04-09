import styled from "styled-components";


export const FormContainer= styled.form`


`

export const FormInput = styled.input`

width:15rem;
height:2rem;
margin-top:1rem;
border:none;
border-radius:1.5rem;
text-indent:1rem;
font-size:1rem;
background-color:rgba(0,0,0,0.1);

`

export const FormButton = styled.button`

background-color:rgba(0,0,0,0.1);
padding:5px;
border-radius:1.5rem;
margin-left:1rem;
outline:none;
cursor: pointer;
font-size:1rem;
border:none;
&:hover {
    background-color:rgba(0,0,0,0.2);
    border:1px solid black;
    transition:all 0.3s ease-in;
}



`