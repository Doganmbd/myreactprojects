import React from "react";
import { ReactComponent as NextIcon } from "../svgs/next.svg";
import { ReactComponent as PrevIcon } from "../svgs/previous.svg";

const Buttons = ({ clickPrev, clickNext }) => {
  const handleNext = () => {
    return clickNext();
  };

  const handlePrev = () => {
    return clickPrev();
  };

  return (
    <div>
      <button>
        <PrevIcon onClick={handlePrev} />
      </button>
      <button>
        <NextIcon onClick={handleNext} />
      </button>
    </div>
  );
};

export default Buttons;
