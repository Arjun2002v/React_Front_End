import React, { useContext } from "react";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { name } = useContext(UserContext);
  const { id } = useParams();

  return (
    <>
      <h2>
        Welcome to my Page {id} {name}
      </h2>
    </>
  );
};

export default Welcome;
