import React from "react";
import Container from "./container";
import reviews from "./data"

const Main = () => {

    console.log(reviews)


  return (
    <div>
      <h1>Our Reviews</h1>
      <div className="container">
          <Container/>
      </div>
    </div>
  );
};

export default Main;
