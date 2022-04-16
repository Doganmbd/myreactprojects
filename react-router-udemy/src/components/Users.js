import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const User = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>setData(res.data))
    }, [])
    



  return (
    <div>
        {
         data.map((veri)=> {
        return (
            <div  key={veri.id}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {veri.name}
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {veri.username}
        </Typography>
        <Typography variant="body2">
         {veri.address.city}
          <br />
          {veri.company.name}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><Link to={`/user/${veri.id}`}>Learn More</Link></Button>
        
      </CardActions>
    </Card>


    </div>


)
})


 
}
    </div>
  )
}

export default User
