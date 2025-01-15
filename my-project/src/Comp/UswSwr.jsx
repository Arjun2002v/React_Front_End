import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json()); // function for calling the api this can be used as a keyword for swr

export const UswSwr = () => {
  const { data: OiOi, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  if (!OiOi && !error) return <div>Loading...</div>;
  return (
    <>
      <Nav />
      <div>
        {OiOi.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
