import React, { useEffect, useState } from "react";

export const BlinkingText = () => {
  const [selected, setSelected] = useState([]);
  const [listed, setListed] = useState([]);
  const oioi = [
    { name: "React" },
    { name: "Vue" },
    { name: "Me" },
    { name: "Idk" },
  ];
  const all = (item) => {
    setSelected(
      selected.length === oioi.length ? [] : oioi.map((item) => item.name)
    );
  };
  const submitted = () => {
    setListed((prev) => [...prev, ...selected]);
  };
  return (
    <>
      <button onClick={all}>Select all</button>
      <button onClick={submitted}>Submit</button>

      {oioi.map((item) => (
        <>
          <div style={{ display: "flex" }}>
            {" "}
            <input
              type="checkbox"
              onChange={() => all(item.name)}
              checked={selected.includes(item.name)}
            />
            <label htmlFor={item.name}>{item.name}</label>
          </div>
        </>
      ))}
      <p>Selected item</p>
      {listed.map((item) => (
        <p>{item}</p>
      ))}
    </>
  );
};
