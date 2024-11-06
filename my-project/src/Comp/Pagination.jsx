import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [api, setData] = useState([]); // Initialize as an empty array
  let [page, setPage] = useState(1);
  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setData(data.products); // Access the 'products' array
  };

  const next = () => {
    const lastPage = Math.ceil(api.length / 10); // Total number of pages
    const newPage = page === lastPage ? 1 : page + 1; // Go back to the first page if on the last page
    setPage(newPage);
  };

  const prev = () => {
    const last = Math.ceil(api.length / 10);
    const Pp = page === 1 ? last : page - 1; // if on the first page then send it back to the last page
    setPage(Pp);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const pagination = (select) => {
    setPage(select);
  };
  return (
    <div>
      <ul>
        {api.slice(page * 10 - 10, page * 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        {api.length > 0 && (
          <div className="page">
            <button onClick={prev}>⬅️</button>
            {[...Array(Math.ceil(api.length / 10))].map((_, i) => (
              <span
                key={i}
                onClick={() => pagination(i + 1)}
                className="numbers"
                style={{ fontWeight: page == i + 1 ? "bold" : "normal" }}
              >
                {i + 1}
              </span>
            ))}
            <button onClick={next}> ➡️ </button>
          </div>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
