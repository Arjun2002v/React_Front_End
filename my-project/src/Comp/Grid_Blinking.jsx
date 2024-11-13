import React, { useEffect, useState } from "react";

export const Grid_Blinking = () => {
  const [start, setStart] = useState(0);
  const colour = ["greens", "greens", "greens"];
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % 3); // modulus is used because till mod 3 only prev will be increased
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <>
          <div className="grid">
            {" "}
            <div className={`grids ${start === index ? colour[index] : ""}`}>
              {index + 1}
              {start}
            </div>
          </div>
        </>
      ))}
    </>
  );
};
