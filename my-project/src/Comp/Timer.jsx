import React, { useEffect, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(new Date());
  const [active, setActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setStart((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active, start]);

  return (
    <>
      <div>Timer:{start}</div>
      <button onClick={() => setActive(!active)}>
        {active ? "Stop" : "Start "}
      </button>
    </>
  );
};
export default Timer;
