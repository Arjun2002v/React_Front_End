import React, { useEffect, useState } from "react";

const Accordian = () => {
  const [da, setData] = useState([]);

  const [show, setShow] = useState(null);
  const loading = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products);
    console.log(data);
  };
  const onClick = (index) => {
    setShow(show === index ? null : index);
  };

  useEffect(() => {
    loading();
  }, []);
  return (
    <div>
      {da.map((item, index) => (
        <div key={index}>
          <div className="container">
            <li className="pop" onClick={onClick}>
              {" "}
              {item.title}{" "}
            </li>
            <div onClick={() => onClick(index)}>⬇️</div>
          </div>

          {show === index ? <div className="">{item.description}</div> : <></>}
        </div> // Display the title of each product
      ))}
    </div>
  );
};

export default Accordian;
