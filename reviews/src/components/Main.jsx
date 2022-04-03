import React,{useState}  from "react";
import Container from "./container";
import reviews from "./data";


const Main = () => {

/*     console.log(reviews)
    console.log(reviews[0].name) */

    const [change,setChange] = useState(reviews[0])

 /*    console.log(change) */

  return (
    <div>
      <h1>Our Reviews</h1>
      <div className="container">
          <Container changeProps={change}/>
      </div>
    </div>
  );
};

export default Main;
