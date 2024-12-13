//Tabs Component

import React, { useState } from "react";
import Nav from "./Nav";

const Tabs = () => {
  const [active, setActive] = useState(true);
  const click = (index) => {
    setActive(active == index ? null : index);
  };
  return (
    <>
      <Nav />
      <div className="div">
        <div className="idk">
          <div
            className="head"
            onClick={() => click(1)}
            style={{
              backgroundColor: active === 1 ? "red" : "",
              padding: "5px",
              borderRadius: "30px",
            }}
          >
            One
          </div>
          {active == 1 && <div>Hi Niggass</div>}
        </div>
        <div className="idk">
          <div
            className={`head${active == 2 ? "active" : ""} `}
            onClick={() => click(2)}
            style={{
              backgroundColor: active === 2 ? "green" : "",
              padding: "5px",
              borderRadius: "30px",
            }}
          >
            Two
          </div>
          {active == 2 && <div>Hi Niggass</div>}
        </div>
        <div className="idk">
          <div
            className="head"
            onClick={() => click(3)}
            style={{
              backgroundColor: active === 3 ? "blue" : "",
              color: active === 3 ? "white" : "black",
              padding: "5px",
              borderRadius: "30px",
            }}
          >
            Three
          </div>
          {active == 3 && <div>Hi Niggass</div>}
        </div>
      </div>
    </>
  );
};
export default Tabs;
