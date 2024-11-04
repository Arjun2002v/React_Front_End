import React, { useEffect, useState } from "react";

export const Pagination = () => {
  const [api, setData] = useState([]); // Initialize as an empty array
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products); // Access the 'products' array
  };

  useEffect(() => {
    fetchData();
  }, []);
  const pagination = (select) => {
    setPage(select);
  };
  return (
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {api.slice(page * 10 - 10, page * 10).map((item, index) => (
          <li key={item.id}>{item.title}</li>
        ))}
        {api.length > 0 && (
          <div>
            <button disabled={page == 1} onClick={() => pagination(page - 1)}>
              ⬅️
            </button>
            {[...Array(Math.ceil(api.length / 10))].map((_, i) => (
              <span key={i} onClick={() => pagination(i + 1)}>
                {i + 1}
              </span>
            ))}
            <button
              disabled={page == api.length / 10}
              onClick={() => pagination(page + 1)}
            >
              ➡️
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};
