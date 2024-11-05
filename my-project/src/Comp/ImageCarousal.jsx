import React, { useState } from "react";

const ImageCarousal = () => {
  const [curr, setCurr] = useState(0);
  const next = () => {
    //adding next button

    const newindex = curr === images.length - 1 ? 0 : curr + 1; // if the images is on last images then put curr as 0 or increement curr
    setCurr(newindex);
  };
  const prev = () => {
    const previous = curr === 0 ? images.length - 1 : curr - 1; //if the image is in curr is zero then put images.length-1 or decreement the curr
    setCurr(previous);
  };

  const images = [
    "https://images.unsplash.com/photo-1730299814370-49f9f6491957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1730616671068-e19a0cf2f12c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1730599615689-9598469712fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697477565728-d54c716b51d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      <button onClick={prev}>◀️</button>
      <img src={images[curr]} alt="" />
      <button onClick={next}>▶️</button>
      {Array(Math.ceil(images.length)).map((_, i) => (
        <>
          {" "}
          <div className="circle">{i + 1}</div>
        </>
      ))}
    </>
  );
};

export default ImageCarousal;
