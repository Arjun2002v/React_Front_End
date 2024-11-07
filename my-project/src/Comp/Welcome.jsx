import React, { useContext } from "react";
import { UserContext } from "../App";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { id } = useParams();

  return (
    <>
      <div>
        <h2>Welcome to my page {id}</h2>
      </div>
    </>
  );
};

export default Welcome;
