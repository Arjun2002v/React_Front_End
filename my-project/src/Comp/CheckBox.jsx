import React, { useState } from "react";

const CheckBox = () => {
  const [checked1, setChecked1] = useState();
  const [checked2, setChecked2] = useState();

  const isChecked = checked1 && checked2;
  const check = () => {
    setChecked1(!checked1);
    setChecked2(!checked2);
  };
  return (
    <>
      <input type="checkbox" onChange={check} checked={isChecked} />
      <label htmlFor="">Laptop</label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "30px",
          marginTop: "20px",
        }}
      >
        <div>
          <input
            type="checkbox"
            onChange={() => setChecked1(!checked1)}
            checked={checked1}
          />
          <label htmlFor="">Macbook</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => setChecked2(!checked2)}
            checked={checked2}
          />
          <label htmlFor="">Asus</label>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
