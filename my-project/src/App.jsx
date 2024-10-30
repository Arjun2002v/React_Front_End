import React from "react";
import DiceRoller from "./Comp/DiceRoller";
import Timer from "./Comp/Timer";
import Tabs from "./Comp/Tabs";
import Digital from "./Comp/Digital";
import TrafficLight from "./Comp/TrafficLight";

const App = () => {
  return (
    <div>
      <DiceRoller />
      {/* <Timer />
      <Tabs />
      <Digital /> */}
      <TrafficLight />
    </div>
  );
};

export default App;
