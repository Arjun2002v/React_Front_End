import React, { createContext } from "react";
// import DiceRoller from "./Comp/DiceRoller";
// import Timer from "./Comp/Timer";
// import Tabs from "./Comp/Tabs";
// import Digital from "./Comp/Digital";
// import TrafficLight from "./Comp/TrafficLight";
// import ImageCarousal from "./Comp/ImageCarousal";
// import Modal from "./Comp/Modal";
// import Pagination from "./Comp/Pagination";
// import Accordian from "./Comp/Accordian";
import Login from "./Comp/Login";
import TodoList from "./Comp/TodoList";

const UserContext = createContext(null);

const App = () => {
  const initial = { userName: "", passWord: "" };

  return (
    <div>
      <h1>Front-end React Practice</h1>
      <UserContext.Provider value={initial}>
        {/* Uncomment components below as needed */}
        {/* <DiceRoller /> */}
        {/* <Timer /> */}
        {/* <Tabs /> */}
        {/* <Digital /> */}
        {/* <TrafficLight /> */}
        {/* <ImageCarousal /> */}
        {/* <Modal /> */}
        {/* <Accordian /> */}
        {/* <Pagination /> */}
        {/* <Login /> */}
        <TodoList />
      </UserContext.Provider>
    </div>
  );
};

export { UserContext };
export default App;
