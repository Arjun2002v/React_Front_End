import React from "react";
import DiceRoller from "./Comp/DiceRoller";
import Timer from "./Comp/Timer";
import Tabs from "./Comp/Tabs";
import Digital from "./Comp/Digital";
import TrafficLight from "./Comp/TrafficLight";
import ImageCarousal from "./Comp/ImageCarousal";
import Modal from "./Comp/Modal";
import { Pagination } from "./Comp/Pagination";

const App = () => {
  const images = [];
  return (
    <div>
      <h1>Front-end React Practice</h1>
      {/* <DiceRoller /> */}
      {/* <Timer />
      <Tabs />
      <Digital /> */}
      {/* <TrafficLight /> */}
      {/* <ImageCarousal /> */}
      {/* <Modal /> */}
      <Pagination />
    </div>
  );
};

export default App;
