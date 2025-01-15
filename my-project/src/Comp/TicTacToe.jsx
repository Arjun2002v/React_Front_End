import React, { useState } from "react";

export const TicTacToe = () => {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [result, setResult] = useState(null); // Store the winner
  const combo = [
    // the possible winning combos
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const winner = (player) => {
    return combo.some((prev) => prev.every((index) => player.includes(index)));
  };

  const handleClick = (index) => {
    if ((first.length + second.length) % 2 === 0) {
      setFirst((prev) => {
        const updatedFirst = [...prev, index];
        if (winner(updatedFirst)) {
          setResult("Player X Wins!");
        }
        return updatedFirst;
      });
    } else {
      setSecond((prev) => {
        const updatedSecond = [...prev, index];
        if (winner(updatedSecond)) {
          setResult("Player O Wins!");
        }
        return updatedSecond;
      });
    }

    if (first.length + second.length === 8 && !result) {
      setResult("It's a Draw!");
    }
  };

  return (
    <>
      <Nav />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "10px",
        }}
      >
        {Array.from({ length: 9 }).map((_, item) => (
          <div key={item}>
            <div
              style={{
                backgroundColor: "white",
                width: "30px",
                padding: "20px",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: result ? "not-allowed" : "pointer",
              }}
              onClick={() => handleClick(item)}
            >
              {first.includes(item) && "X"}
              {second.includes(item) && "O"}
            </div>
          </div>
        ))}
      </div>
      {result && (
        <div
          style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}
        >
          {result}
        </div>
      )}
    </>
  );
};
