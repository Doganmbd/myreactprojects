import React, { useEffect,useState } from 'react';
import Male from "../assets/man.svg";
import Female from "../assets/woman.svg";
import Mail from "../assets/mail.svg";
import Map from "../assets/map.svg";
import Phone from "../assets/phone.svg";
import Padlock from "../assets/padlock.svg";
import GrowMan from "../assets/growing-up-man.svg";
import GrowWoman from "../assets/growing-up-woman.svg";
import axios from 'axios';
import {CardContainer,CardImage} from "CreateCardStyle";






const CreateCards = () => {

    const [randomUser, setRandomUser] = useState({})
    const [property, setProperty] = useState([])

    const fetchApi = async ()=> {
        try {
            const Data =await axios.get("https://randomuser.me/api/");
            setRandomUser(Data.data.results[0]);
            console.log(Data);

            
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
     fetchApi()
    

    }, [])

    const {gender,email,phone,name,picture,dob,location}=randomUser


    

  return (
    <CardContainer>
        <CardImage  src={picture?.medium} alt="" />
        <p>
            My <span>name</span> is
        </p>
        <h3>bilgi</h3>
        <div className="flexbox">
            <CardImage src={gender === "male" ? Male : Female } alt="" />
            <CardImage src={Mail} alt="" />
            <CardImage src={GrowMan} alt="" />
            <CardImage src={Map} alt="" />
            <CardImage src={Phone} alt="" />
            <CardImage src={Padlock} alt="" />
        </div>

        <div className="flexbox">
            <button onClick={fetchApi}>New user</button>
            <button>Add user</button>
        </div>




    </CardContainer>
  )
}

export default CreateCards