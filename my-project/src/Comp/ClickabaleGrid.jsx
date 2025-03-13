// import React, { useEffect, useRef, useState } from "react";

import { useEffect, useState } from "react";

// export const ClickableGrid = () => {
//   const [past, setPast] = useState([]);

//   const conRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       conRef.current.style.pointerEvents = "none"; // disable the clickable when in the cycle
//       setPast((prev) => {
//         if (prev.length === 0) {
//           // if prev is no more the clearInterval
//           clearInterval(interval);
//         }
//         console.log(prev.length, "apple");
//         return prev.slice(1); // else delete the element from the last clicked
//         // Remove the first element  (0,-1) means the exept the last element everything else will be printed
//       });
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup on unmount or dependencies change
//   }, [past, conRef]);

//   return (
//     <div
// style={{
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr 1fr ",
//   gap: "5px",
// }}
//       ref={conRef}
//     >
//       {Array.from({ length: 9 }).map((_, item) => (
//         <>
//           <div>
//             <div
//               className={`grids ${past.includes(item) ? "greens" : "grey"}`}
//               onClick={() => setPast((prev) => [...prev, item])}
//             >
//               {item + 1}
//             </div>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default ClickableGrid;

const ClickabaleGrid = () => {
  const [past, setPast] = useState([]);
  useEffect(() => {
    if (past.length === 0) return; // Step 1: If the array is empty, exit early

    const interval = setInterval(() => {
      // Step 2: Start an interval that runs every 1 second
      setPast((prev) => (prev.length > 1 ? prev.slice(0, -1) : [])); // Step 3: Remove the last item
    }, 1000);

    return () => clearInterval(interval); // Step 4: Cleanup interval when past.length changes
  }, [past.length]); // Step 5: Run this effect only when the length of past changes

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gap: "5px",
        }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <>
            <div
              className={`grids  ${past.includes(i) ? "greens" : "grey"}`}
              onClick={() => setPast((prev) => [...prev, i])}
            >
              {i + 1}
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default ClickabaleGrid;
