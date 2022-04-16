import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";

const User = () => {

    const [detail, setDetail] = useState({})

    let {id} = useParams();
    
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>setDetail(res.data), [])
    
   
  return (
    <div>

           
    </div>
  )
}

export default User