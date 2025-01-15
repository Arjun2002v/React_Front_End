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

import { Grid_Blinking } from "./Comp/Grid_Blinking";

import ClickabaleGrid from "./Comp/ClickabaleGrid";
import SidebarUCF from "./Comp/SidebarUCF";
import CheckBox from "./Comp/CheckBox";
import TransferList from "./Comp/TransferList";
import TypeClick from "./Comp/TypeClick";
import { TicTacToe } from "./Comp/TicTacToe";
import { UswSwr } from "./Comp/UswSwr";
import { StarRating } from "./Comp/StarRating";

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

    { path: "/grid", element: <Grid_Blinking /> },
    { path: "/sidebar", element: <SidebarUCF /> },

    { path: "/click", element: <ClickabaleGrid /> },
    { path: "/Check", element: <CheckBox /> },
    { path: "/transfer", element: <TransferList /> },
    { path: "/typeclick", element: <TypeClick /> },
    { path: "/tic", element: <TicTacToe /> },
    { path: "/useSwr", element: <UswSwr /> },
    { path: "/star", element: <StarRating /> },
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
