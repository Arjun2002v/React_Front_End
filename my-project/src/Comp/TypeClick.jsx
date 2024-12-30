import React, { useRef, useState } from "react";

const TypeClick = () => {
  const [number, setNumber] = useState(""); // State to store the input value from the user
  let [count, setCount] = useState(0); // State to track the number of slots clicked (selected)
  const [second, setSecond] = useState(0); // State to store the number of boxes to be displayed
  const [color, setColor] = useState([]); // State to store the indices of the selected boxes
  const inputRef = useRef();
  // Ref for accessing the input element

  // Function to handle the 'Add' button or 'Enter' key press
  const add = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setSecond(number); // Set the number of boxes to the value entered by the user
    }
  };

  // Function to handle clicking on individual boxes
  const click = (item) => {
    setColor((prev) =>
      // Toggle the box's selected state: add if not present, remove if already present
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    setCount((prevCount) =>
      prevCount.includes(item) ? prevCount : prevCount + 1
    ); // Increment the total number of clicks (slots selected)
  };

  return (
    <div>
      {/* Input for the user to enter the number of boxes */}
      <div>
        <input
          type="number"
          placeholder="Enter Your Number"
          ref={inputRef} // Reference for the input element
          onKeyDown={add} // Trigger 'Add' logic on pressing Enter
          value={number} // Controlled input value
          onChange={(e) => setNumber(e.target.value)} // Update the input value state
        />
        <button onClick={add} disabled={number > 10 || number === ""}>
          Add
        </button>
      </div>

      {/* Displaying the boxes based on the entered number */}
      <div style={{ display: "flex", gap: "30px" }}>
        {Array.from({ length: second }).map((_, index) => (
          <div
            key={index}
            style={{
              // Dynamic background based on selection
              background: color.includes(index) ? "green" : "white",
              border: "2px solid black",
              borderRadius: "5px",
              height: "50px",
              width: "50px",
              marginTop: "50px",
              cursor: "pointer",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Jost",
            }}
            onClick={() => click(index)} // Handle click on a box
          >
            {index + 1} {/* Display the index (1-based) */}
          </div>
        ))}
      </div>

      {/* Displaying the total number of slots selected */}
      <span style={{ fontFamily: "Jost" }}>
        You have Selected {count} slots
      </span>
    </div>
  );
};

export default TypeClick;
