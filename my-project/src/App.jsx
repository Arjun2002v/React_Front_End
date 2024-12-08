import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DiceRoller from "./Comp/DiceRoller";
import Timer from "./Comp/Timer";
import Tabs from "./Comp/Tabs";
import Digital from "./Comp/Digital";
import TrafficLight from "./Comp/TrafficLight";
import ImageCarousal from "./Comp/ImageCarousal";
import Modal from "./Comp/Modal";
import Pagination from "./Comp/Pagination";
import Accordian from "./Comp/Accordian";
import Login from "./Comp/Login";
import TodoList from "./Comp/TodoList";
import Nav from "./Comp/Nav";
import Welcome from "./Comp/Welcome";
import RadioButtons from "./Comp/RadioButtons";
import { UCF_Replica } from "./Comp/UCF_Replica";
import { Grid_Blinking } from "./Comp/Grid_Blinking";
import { Tic } from "./Comp/Tic";
import ClickabaleGrid from "./Comp/ClickabaleGrid";

const UserContext = createContext(null);

const App = () => {
  const users = [
    { id: "1", name: "Arjun", password: "1234" },
    { id: "2", name: "Achu", password: "123" },
    { id: "3", name: "Arju", password: "12" },
  ];

  const router = createBrowserRouter([
    {
      path: "/dice",
      element: <DiceRoller />,
    },
    { path: "/todo", element: <TodoList /> },
    { path: "/tabs", element: <Tabs /> },
    { path: "/accordian", element: <Accordian /> },
    { path: "/digital", element: <Digital /> },
    { path: "/image", element: <ImageCarousal /> },
    { path: "/modal", element: <Modal /> },
    { path: "/radio", element: <RadioButtons /> },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/trafficlight", element: <TrafficLight /> },
    { path: "/pagination", element: <Pagination /> },
    { path: "/", element: <Nav /> },
    { path: "/timer", element: <Timer /> },
    {
      path: "/welcome/:id",
      element: <Welcome />,
    },
    { path: "/ucf", element: <UCF_Replica /> },
    { path: "/grid", element: <Grid_Blinking /> },
    { path: "/tic", element: <Tic /> },
    { path: "/click", element: <ClickabaleGrid /> },
  ]);

  return (
    <div>
      <h1>Front-end React Practice</h1>
      <UserContext.Provider value={users}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
};

export { UserContext };
export default App;
