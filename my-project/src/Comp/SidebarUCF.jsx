import React, { useState } from "react";

const SidebarUCF = () => {
  const [visible, setVisible] = useState(false);
  const [add, setAdd] = useState(false);
  const [email, setEmail] = useState(false);

  const emails = [
    { name: "123@gmail.com" },
    { name: "123@gmail.com" },
    { name: "123@gmail.com" },
    { name: "123@gmail.com" },
    { name: "123@gmail.com" },

    { name: "1234@gmail.com" },
    { name: "12345@gmail.com" },
  ];
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Press Me</button>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: visible ? 0 : "-340px", // Slide in from the right
          width: "340px", // Adjusted width
          height: "100%",
          backgroundColor: "white",
          transition: "right 0.3s ease", // Smooth transition
          zIndex: 1000, // Ensure it appears above other elements
        }}
      >
        Sidbar
        <button onClick={() => setEmail(true)}>Add</button>
        {email ? (
          <>
            <div onClick={() => setAdd(true)}>Add a new file</div>
          </>
        ) : (
          <></>
        )}{" "}
        b
        <div>
          {add ? (
            <div>
              <div>
                <input type="text" placeholder="search your email" />
                {emails.map((item, i) => (
                  <div key={i}>
                    <h3>{item.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarUCF;
