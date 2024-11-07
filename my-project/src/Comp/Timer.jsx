import React, { useEffect, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(0); // this state is used for managing the timer value
  const [active, setActive] = useState(false); // start and stop functionality
  useEffect(() => {
    let time = null;
    // if time is not declare more than 1 interval is executed leading to error
    if (active) {
      time = setInterval(() => {
        //
        setStart((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(time); // previous time will be set to null after every second
  }, [active, start]);

  return (
    <>
      <div>Timer:{start}</div>
      <button onClick={() => setActive(!active)}>
        {active ? "Stop" : "Start "}
      </button>
      <button onClick={() => setStart(0)}>Reset</button>
    </>
  );
};
export default Timer;
