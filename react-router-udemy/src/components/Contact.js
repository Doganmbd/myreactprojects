import React from 'react';
import {useNavigate} from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate();

    console.log(navigate)

    setTimeout(() => {
    navigate("/about")},2000)

    
  return (
    <div>
      <h1>Contact göster ve 2sn sonra about sayfasına geç</h1>
    </div>
    
  )
}

export default Contact