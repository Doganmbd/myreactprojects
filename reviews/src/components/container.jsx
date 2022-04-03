import React, { useState } from "react";
import Buttons from "./Buttons";
import SurpriseButton from "./SurpriseButton";
import reviews from "./data";

const Container = () => {
  const [index, setIndex] = useState(0);
  // const [change,setChange] = useState(reviews[index])
  const [change, setChange] = useState(reviews);

  console.log(change);

  const { image, name, job, text } = change[index];

  console.log(change.length - 1);

  const checkIndex = (c) => {
    if (c > change.length - 1) {
      return 0;
    }
    if (c < 0) {
      return (c = change.length - 1);
    }
    return c;
  };

  const handlePrev = () => {
    setIndex((b) => {
      let newItem = b - 1;
      return checkIndex(newItem);
    });
  };

  const handleNext = () => {
    setIndex((a) => {
      let newItem = a + 1;
      return checkIndex(newItem);
    });
  };


  const callbackFunc = () => {
    const showCallback = Math.floor(Math.random() * (change.length))
    console.log(showCallback);
    setIndex(showCallback)
  }

  console.log(index);

  return (
    <div>
      <img src={image} alt="bilal" />
      <h5 className="name"> {name}</h5>
      <h4 className="title">{job}</h4>
      <p className="describe">{text}</p>

      <div className="buttons">
        <Buttons clickPrev={handlePrev} clickNext={handleNext} />
      </div>
      <div className="buttonsTwo">
        <SurpriseButton surpriseNumber = {change} callbackFuncProp = {callbackFunc}  />
      </div>
    </div>
  );
};

export default Container;
