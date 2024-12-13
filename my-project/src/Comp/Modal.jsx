import React, { useState } from "react";
import Nav from "./Nav";

const Modal = () => {
  const [show, setShow] = useState(false);
  const tabs = ["details", "activity"];
  const details = [{ name: "Arjun" }, { name: "Me" }];
  const activity = [
    { det: "Arjun details", date: "11" },
    { det: "Me details", date: "12" },
  ];

  const [active, setActive] = useState(false);

  const showing = (index) => {
    setActive(active === index ? null : index);
  };

  const click = () => {
    setShow(!show);
  };
  return (
    <>
      <Nav />
      <button onClick={click}>Show</button>
      {show && (
        <div className="modal-overlay">
          <div
            className="modal"
            style={{
              background: "white",
              width: "40%",
              height: "60%",
              color: "black",
            }}
          >
            <h2>Modal Dialog</h2>
            <p>
              <div>
                <div
                  style={{ display: "flex", gap: "30px" }}
                  className={`active`}
                >
                  <div
                    onClick={() => showing(1)}
                    style={{ borderBottom: active === 1 ? "1px" : "" }}
                  >
                    Details
                  </div>
                  {active === 1 ? (
                    <>
                      {details.map((item, index) => (
                        <div key={index} style={{ display: "flex" }}>
                          <h2>{item.name}</h2>
                        </div>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                  <div onClick={() => showing(2)}>
                    Activity
                    {active === 2 ? (
                      <>
                        {activity.map((item, index) => (
                          <div
                            key={index}
                            style={{ display: "flex", gap: "50px" }}
                          >
                            <h3>{item.det}</h3>
                            <h3>{item.date}</h3>
                          </div>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </p>
            <button onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
