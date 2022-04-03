import React from "react";
import { ReactComponent as NextIcon } from "../svgs/next.svg";
import { ReactComponent as PrevIcon } from "../svgs/previous.svg";


const Buttons = () => {
  return (
    <div>
      <button>
        <PrevIcon />
      </button>
      <button>
        <NextIcon />
      </button>

    </div>
  );
};

export default Buttons;
