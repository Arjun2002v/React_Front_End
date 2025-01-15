import React, { useState } from "react";
import Nav from "./Nav";

export const StarRating = () => {
  const [select, SetSelect] = useState([1]);
  const selected = (item) => {
    // this is the function that is called when a star is clicked
    SetSelect(item + 1);
  };
  return (
    <>
      <Nav />
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {" "}
        {Array.from({ length: 5 }).map((_, item) => (
          <>
            <div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: select > item ? "red" : "white",
                  borderRadius: "30px",
                }}
                onClick={() => selected(item)}
              ></div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
