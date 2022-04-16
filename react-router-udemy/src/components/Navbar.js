import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Button variant="contained"><Link to="/" >Home</Link></Button>
      <Button variant="contained"><Link to="/about" >About</Link></Button>
      <Button variant="contained"><Link to="/contact" >Contact</Link></Button>
      <Button variant="contained"><Link to="/users" >USers</Link></Button>
        
        
      
       
      </Container>
    </React.Fragment>
  );
}