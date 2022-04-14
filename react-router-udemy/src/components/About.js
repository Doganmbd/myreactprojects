import React from 'react'
import {Link} from "react-router-dom";
import Modals from './Modals'

const About = () => {
  return (
    
    <div>About Components
      <Modals/>
      <div>
        
        <Link to="/card/bilal">Bilal in sayfasına git</Link>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quidem repudiandae dolores incidunt obcaecati rem, excepturi enim harum velit odio.</p>
      </div>
      <div>
        <Link to="/card/mustafa">mustafa nın sayfasına git</Link>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quidem repudiandae dolores incidunt obcaecati rem, excepturi enim harum velit odio.</p>
      </div>
      <Link to="/card/doğan">Doğan ın sayfasına git</Link>
    </div>
  )
}

export default About