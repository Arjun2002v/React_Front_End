import React, { useState } from "react";

const TransferList = () => {
  const [checkboxState, setCheckboxState] = useState([]); // Track selected checkboxes
  const [downList, setDownList] = useState([]); // Track items moved to "down" list

  const checkboxs = [
    { name: "React" },
    { name: "Vue" },
    { name: "Me" },
    { name: "Idk" },
  ];

  // Toggle checkbox state
  const checkstore = (item) => {
    setCheckboxState([...checkboxState, item]);
  };

  // Move selected items to "downList"
  const down = () => {
    setDownList((prev) => [...prev, ...checkboxState]);
    setCheckboxState([]); // Clear selected items after moving
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Available Items:</h3>
        {checkboxs
          .filter((item) => !downList.includes(item.name)) // Exclude already moved items
          .map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={item.name}
                checked={checkboxState.includes(item.name)}
                onChange={() => checkstore(item.name)}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        <button onClick={down} style={{ marginTop: "20px" }}>
          Move ⬇️
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Moved Items:</h3>
        <ul>
          {downList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
