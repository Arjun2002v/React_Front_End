import React, { useEffect, useState } from "react";

export const UCF_Replica = () => {
  const [api, setApi] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setApi(data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {api.map((item) => (
        <>
          {" "}
          <table>
            {" "}
            <th>
              Name
              <tr>{item.firstName}</tr>
            </th>
            <th>
              Age<tr>{item.age}</tr>
            </th>
          </table>
        </>
      ))}
    </>
  );
};
