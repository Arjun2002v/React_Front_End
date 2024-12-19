import React, { useEffect, useRef, useState } from "react";
import openAiLogo from "../assets/openailogo.png";
const SidebarUCF = () => {
  const [visible, setVisible] = useState(false);
  const [add, setAdd] = useState(false);
  const [email, setEmail] = useState(false);
  const [store, setStore] = useState([]);
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(null); // Single object instead of array

  const search = (e) => {
    return emails.filter((email) =>
      email.name.toLowerCase().includes(e.toLowerCase())
    );
  };

  const storing = (i) => {
    setStore([i.name]);
    setAdd(false);
    setShow(i); // Store the selected email object
  };

  const ref = useRef(null);

  useEffect(() => {
    const outside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", outside);
    return () => {
      document.removeEventListener("mousedown", outside);
    };
  });

  const emails = [
    { name: "123@gmail.com", age: 22, creator: "Arjun" },
    { name: "124@gmail.com", age: 21, creator: "GiggaNigga" },
    { name: "125@gmail.com", age: 18, creator: "Mmmm" },
    { name: "126@gmail.com", age: 23, creator: "fuda" },
    { name: "127@gmail.com", age: 54, creator: "Pund" },
    { name: "1234@gmail.com", age: 40, creator: "Myr" },
    { name: "12345@gmail.com", age: 24, creator: "OIOIOI" },
  ];
  // List of random Imgur image URLs
  const imageUrls = [
    {
      name: "Arjun",
      img: "https://imgur.com/gallery/new-firefox-logo-pIfdoIW",
    },
    {
      name: "Arjun",
      img: "https://imgur.com/gallery/new-firefox-logo-pIfdoIW",
    },
    {
      name: "Arjun",
      img: "https://imgur.com/gallery/new-firefox-logo-pIfdoIW",
    },
    {
      name: "Arjun",
      img: "https://imgur.com/gallery/new-firefox-logo-pIfdoIW",
    },
  ];

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Press Me</button>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: visible ? 0 : "-240px",
          width: "340px",
          height: "100%",
          backgroundColor: "white",
          transition: "right   0.5s ease",
          zIndex: 1000,
          display: "flex",
        }}
        ref={ref}
      >
        Sidebar
        <div
          style={{
            width: "150px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        ></div>
        <div>
          {" "}
          <button onClick={() => setEmail(true)}>Add</button>
          {email && <div onClick={() => setAdd(true)}>Add a new file</div>}
          <div>
            {add && (
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Search your email"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {search(query).map((item, i) => (
                    <div key={i}>
                      <h3 onClick={() => storing(item)}>{item.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {/* Render the stored email list */}
                {store.map((email, index) => (
                  <li key={index}>{email}</li>
                ))}
              </ul>
            </div>
            {/* Display the selected email details */}
            {show && (
              <div>
                <h3>Age: {show.age}</h3>
                <h3>Creator: {show.creator}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarUCF;
