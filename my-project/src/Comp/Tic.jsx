import React, { useState } from "react";

export const Tic = () => {
  const [tick, setTick] = useState();

  return (
    <>
      <div>
        {Array.from({ length: 9 }).map((_, item) => (
          <>
            <div className="o">
              <div className="grids">{item + 1}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
