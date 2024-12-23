import React, { useState } from "react";

const TransferList = () => {
  // State to track which checkboxes are currently selected
  const [checkboxState, setCheckboxState] = useState([]);

  // State to track items that have been moved to the "Moved Items" list
  const [downList, setDownList] = useState([]);

  // The list of all available items
  const checkboxs = [
    { name: "React" },
    { name: "Vue" },
    { name: "Me" },
    { name: "Idk" },
  ];

  // Function to toggle the checkbox state (add/remove items from `checkboxState`)
  const checkstore = (item) => {
    // If the item is already selected, remove it; otherwise, add it
    setCheckboxState((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Function to move selected items from `checkboxState` to `downList`
  const down = () => {
    setDownList((prev) => [...prev, ...checkboxState]); // Append selected items to the moved list
    setCheckboxState([]); // Clear selected items after moving
  };

  return (
    <div>
      {/* Section for available items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3>Available Items:</h3>
        {checkboxs
          // Filter out items that have already been moved
          .filter((item) => !downList.includes(item.name))
          .map((item, index) => (
            <div key={index}>
              {/* Render each checkbox with its label */}
              <input
                type="checkbox"
                id={item.name}
                checked={checkboxState.includes(item.name)} // Check the box if it's in `checkboxState`
                onChange={() => checkstore(item.name)} // Toggle the item's selection
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        {/* Button to move selected items to the "Moved Items" list */}
        <button onClick={down} style={{ marginTop: "20px" }}>
          Move ⬇️
        </button>
      </div>

      {/* Section for moved items */}
      <div style={{ marginTop: "20px" }}>
        <h3>Moved Items:</h3>
        <ul>
          {/* Render all items in the `downList` */}
          {downList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
