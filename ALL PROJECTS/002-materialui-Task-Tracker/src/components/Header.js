import React from 'react';
import Button from './Button';

const Header = ({text}) => {
  return (
    <div className="header">
      <h1>{text}</h1> 
      <Button/>
    </div>
  )
}

export default Header