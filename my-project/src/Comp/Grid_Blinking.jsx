import React, { useEffect, useState } from "react";

export const Grid_Blinking = () => {
  const [start, setStart] = useState(0);
  const colour = Array.from({ length: 9 }).fill("greens");
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % 9); // modulus is used because till mod 3 only prev will be increased
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {Array.from({ length: 9 }).map(
          (
            _,
            index //rendering the containers for grid using Map
          ) => (
            <>
              <div>
                {" "}
                <div
                  className={`grids ${start === index ? colour[index] : ""}`}
                >
                  {index + 1}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
};
