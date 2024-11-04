import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [start, setStart] = useState("red");
  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setStart((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        if (prev == "yellow") return "red";
      });
    }, 2000);
    return () => clearInterval(interval); // used to stop the timer interval when anything unmounts
  });
  return (
    <div className="flex">
      <div className={`circle ${start === "red" ? "red" : "grey"}`}></div>
      <div className={`circle ${start === "yellow" ? "yellow" : "grey"}`}></div>
      <div className={`circle ${start === "green" ? "green" : "grey"}`}></div>
    </div>
  );
};

export default TrafficLight;
