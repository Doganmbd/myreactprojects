import React from 'react' ;
import {useNavigate} from "react-router-dom" ;

const Home = () => {
    let navigate= useNavigate();
  return (
    <div className="ui raised very padded text container segment" style={{marginTop:"80px"}} >
        <h3 className="ui header">
                <h2>1 HOME PAGE </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veniam excepturi eos voluptatibus. Eum, earum quia. Iste vero ex maiores.
                <button onClick={()=> {navigate("/contact")}   }>Go to Contact</button>
            </p>
        </h3>
    </div>
  )
}

export default Home