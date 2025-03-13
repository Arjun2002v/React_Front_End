import React, { useEffect, useState } from "react";

export const BlinkingText = () => {
  const [past, setPast] = useState("green");
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    if (!isBlinking) return; // Stop blinking if not active

    const inter = setInterval(() => {
      setPast((prev) => (prev === "green" ? "grey" : "green")); // Toggle color
    }, 1000);

    return () => clearInterval(inter); // Cleanup interval when blinking stops
  }, [isBlinking]); // Runs when `isBlinking` changes

  return (
    <>
      <div className={past}>Hi</div>
      <button onClick={() => setIsBlinking((prev) => !prev)}>
        {isBlinking ? "Stop" : "Start"}
      </button>
    </>
  );
};
