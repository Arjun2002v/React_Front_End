import React from "react";
import DiceRoller from "./Comp/DiceRoller";
import Timer from "./Comp/Timer";
import Tabs from "./Comp/Tabs";
import Digital from "./Comp/Digital";
import TrafficLight from "./Comp/TrafficLight";
import ImageCarousal from "./Comp/ImageCarousal";
import Modal from "./Comp/Modal";

const App = () => {
  const images = [];
  return (
    <div>
      <DiceRoller />
      {/* <Timer />
      <Tabs />
      <Digital /> */}
      {/* <TrafficLight /> */}
      {/* <ImageCarousal /> */}
      <Modal />
    </div>
  );
};

export default App;
