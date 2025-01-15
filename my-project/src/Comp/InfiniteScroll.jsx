import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Check if more data is available

  // Function to fetch data
  const fetchData = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      ); // Replace with your API URL
      const newData = await response.json();

      setData((prev) => [...prev, ...newData]); // Append new data
      setHasMore(newData.length > 0); // Check if more data exists
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // Handle scrolling
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      if (hasMore && !loading) {
        setPage((prev) => prev + 1); // Increment the page
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data when page changes

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ margin: "20px 0", listStyle: "none" }}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more data to load</p>}
    </div>
  );
};

export default InfiniteScroll;
