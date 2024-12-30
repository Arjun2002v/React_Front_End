import React, { useRef, useState } from "react";

const TypeClick = () => {
  const [number, setNumber] = useState("");
  let [count, setCount] = useState(0); // State for input value
  const [second, setSecond] = useState(0);
  const [color, setColor] = useState([]); // State for array length
  const inputRef = useRef(); // Ref for input element

  const add = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setSecond(number);
    }
  };
  const click = (item) => {
    setColor((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter Your Number"
          ref={inputRef}
          onKeyDown={add}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={add} disabled={number > 10 || number === ""}>
          Add
        </button>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        {Array.from({ length: second }).map((_, index) => (
          <div
            key={index}
            style={{
              background: color.includes(index) ? "green" : "white",

              border: "2px solid  black",
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
            onClick={() => click(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <span style={{ fontFamily: "Jost" }}>
        {" "}
        You have Selected {count} slots
      </span>
    </div>
  );
};

export default TypeClick;
