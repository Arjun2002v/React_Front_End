//Digital Clock

import React, { useEffect, useState } from "react";

const Digital = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);
  const format = (date) => {
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <>
      <div>{format(time)}</div>
    </>
  );
};
export default Digital;
