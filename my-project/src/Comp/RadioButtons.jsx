import React, { act, useState } from "react";

const RadioButtons = () => {
  const [active, setactive] = useState("All");
  const [show, setshow] = useState(true);

  const change = (index) => {
    setactive(index); // to display the current checked button
  };

  return (
    <>
      <div>
        <button onClick={() => setshow(!show)}>{active}</button>
        {show && (
          <>
            {" "}
            <div>
              <label htmlFor="">All</label>
              <input
                type="radio"
                onChange={() => change("All ")}
                onClick={() => setshow(!show)}
                checked={active === "All"}
              />
            </div>
            <div>
              <label htmlFor="">No</label>
              <input
                type="radio"
                onChange={() => change("No")}
                onClick={() => setshow(!show)}
                checked={active === "No"} // this will store the previous button and dispy the current clicked button
              />
            </div>
            <div>
              <label htmlFor="">Yes</label>
              <input
                type="radio"
                onChange={() => change("Yes")}
                onClick={() => setshow(!show)}
                checked={active === "Yes"   }
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default RadioButtons;
