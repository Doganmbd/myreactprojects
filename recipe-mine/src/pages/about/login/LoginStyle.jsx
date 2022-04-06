import styled from "styled-components";



export const LoginContainer = styled.div`
background-image: url('https://picsum.photos/1600/900');
background-repeat:no-repeat;
height:100vh;
background-size:cover;
background-position:center;
display:flex;
jsutify-content:center;
align-items:center;
`;

export const FormContainer = styled.div`
width:470px;
min-width:470px;
height:450px;
background-color: rgba(0, 173, 181, 0.5);
border-radius:50%;
border:2px solid blue;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const FormHeader = styled.h1`
color:white;
font-family:"Girassol", cursive;
font-size:3rem;
`

export const FormInput = styled.input`
height:40px;
border-radius:15px;
font-size:1.5rem;
margin-bottom:10px;
width:250px;
font-family:"Girassol", cursive;
text-indent:10px;
border:none;

`

export const FormButton = styled.button`
font-family:"Girassol", cursive;
font-size:1.5rem;
border-radius:15px;
border:none;
cursor:pointer;
margin:1rem;
padding:0 1rem;

&:hover {
    background-color: rgba(0, 0, 0, 0.2);
}


`

/* export const SvgImage =styled.img`


` */

export const SubmitForm = styled.form`
display:flex;
flex-direction:column;



`