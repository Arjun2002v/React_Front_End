// Dice Roller

import React, { useState } from "react";

const DiceRoller = () => {
  const [rollResult, setRollResult] = useState(null);
  const [sides, setSides] = useState(6); // Default to a 6-sided die

  const rollDice = () => {
    const result = Math.floor(Math.random() * sides) + 1; // Roll the die
    setRollResult(result); // Update the result
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Dice Roller</h2>
      <input
        type="number"
        value={sides}
        onChange={(e) => setSides(Number(e.target.value))} // Update the number of sides
        min="1"
        style={{ margin: "10px", padding: "5px" }}
      />
      <button onClick={rollDice} style={{ padding: "10px 20px" }}>
        Roll Dice
      </button>
      {rollResult !== null && (
        <h2 style={{ marginTop: "20px" }}>You rolled: {rollResult}</h2>
      )}
    </div>
  );
};

export default DiceRoller;
