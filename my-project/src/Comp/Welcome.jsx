import React, { useContext } from "react";
import { UserContext } from "../App";

const Welcome = () => {
  const { userName } = useContext(UserContext);
  return (
    <>
      <h2>Welcome to My Page {userName}</h2>
    </>
  );
};

export default Welcome;
