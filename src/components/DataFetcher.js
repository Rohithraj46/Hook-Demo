import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h2>Data Fetching (useEffect)</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
