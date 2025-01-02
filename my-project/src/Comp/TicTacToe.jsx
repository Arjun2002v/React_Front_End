import React, { useState } from "react";

export const TicTacToe = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState();

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {Array.from({ length: 9 }).map((_, item) => (
          <>
            <div>
              <div
                style={{
                  backgroundColor: "white",
                  width: "30px",
                  padding: "20px",
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => setFirst((prev) => [...prev, item])}
              >
                {first.includes(item) && "X"}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
