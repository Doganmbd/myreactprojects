import { useState } from "react";
import Header from "./Header";
import InputText from "./InputText";

const FormBox = () => {
  const [show, setShow] = useState(false);

  // BUTTON CHANGE
  const handleButtonClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Header handleButtonClick={handleButtonClick} />
      {show && <InputText />}
    </div>
  );
};

export default FormBox;
