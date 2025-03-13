import React from "react";

const Banner = ({ images, text, cls }) => {
  return (
    <div>
      <h1 style={cls}>{text}</h1>
      <h4>{images}</h4>
    </div>
  );
};

export default Banner;
