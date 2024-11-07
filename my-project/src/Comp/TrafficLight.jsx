import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const TrafficLight = () => {
  const [start, setstart] = useState("red");
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setstart((prev) => {
        if (prev === "red") return "green";
        if (prev === "green") return "yellow";
        if (prev === "yellow") return "red";
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Nav />
      <div className="flex">
        <div className={`oi ${start === "red" ? "red" : "grey"}`}></div>
        <div className={`oi ${start === "green" ? "green" : "grey"}`}></div>
        <div className={`oi ${start === "yellow" ? "yellow" : "grey"}`}></div>
      </div>
    </>
  );
};
export default TrafficLight;
