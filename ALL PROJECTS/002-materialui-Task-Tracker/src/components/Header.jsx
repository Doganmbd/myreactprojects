import React from "react";
import Buttons from "./Buttons";

const Header = ({ handleButtonClick }) => {
  return (
    <div>
      <h1>TASK TRACKER</h1>
      <Buttons handleButtonClick={handleButtonClick} />
    </div>
  );
};

export default Header;
