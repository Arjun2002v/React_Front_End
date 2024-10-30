//Tabs Component

import React, { useState } from "react";

const Tabs = () => {
  const [active, setActive] = useState(true);
  const click = (index) => {
    setActive(active == index ? null : index);
  };
  return (
    <div className="div">
      <div className="idk">
        <div className="head" onClick={() => click(1)}>
          One
        </div>
        {active == 1 && <div>Hi Niggass</div>}
      </div>
      <div className="idk">
        <div
          className={`head${active == 2 ? "active" : ""} `}
          onClick={() => click(2)}
        >
          Two
        </div>
        {active == 2 && <div>Hi Niggass</div>}
      </div>
      <div className="idk">
        <div className="head" onClick={() => click(3)}>
          Three
        </div>
        {active == 3 && <div>Hi Niggass</div>}
      </div>
    </div>
  );
};
export default Tabs;
