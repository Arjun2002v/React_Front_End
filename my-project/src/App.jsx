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
import Counter from "./Comp/Counter";
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
import { Form } from "./Comp/Form";
import InfiniteScroll from "./Comp/InfiniteScroll";
import { BlinkingText } from "./Comp/BlinkingText";
import { Ecommerce } from "./Comp/Ecommerce";

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
    { path: "/typeScript", element: <Counter /> },
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
    { path: "/form", element: <Form /> },
    { path: "/scroll", element: <InfiniteScroll /> },
    { path: "/blinker", element: <BlinkingText /> },
    { path: "/ecommerce", element: <Ecommerce /> },
  ]);

  return (
    <div>
      s{" "}
      <UserContext.Provider value={users}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
};

export { UserContext };
export default App;

// // import AuditTemplates from "../Template/audit.template";
// // import jsonData from "../Template/auditData.json";

// // const App = () => {
// //   const temp = AuditTemplates.getInstance();

// //   const html = temp.generateBodyTemplateForAuditStatusReport(jsonData);
// //   console.log(html);

// //   return <div dangerouslySetInnerHTML={{ __html: html }} />;
// // };

// // export default App;
// import AudiitTemplate from "./NewTemplate/audit.template (1)";
// import data from "./NewTemplate/auditReport (1)";

// const App = () => {
//   const html = AudiitTemplate.getInstance();
//   const template = html.generateBodyTemplateForAuditReport(data);
//   console.log(template);
//   return (
//     <>
//       <div dangerouslySetInnerHTML={{ __html: template }} />
//     </>
//   );
// };
// export default App;
