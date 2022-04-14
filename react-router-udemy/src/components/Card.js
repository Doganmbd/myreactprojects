import React, { useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


const Card = () => {

    const [users, setUsers] = useState("")

   
    let params = useParams(); 
    console.log(params.user);
        
        
    useEffect(() => {
        setUsers(params.user)
        
    }, [])

  return (
    <div>

        <h1>{users}</h1>
    </div>
  )
}

export default Card