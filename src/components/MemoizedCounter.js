import React, { useState, useCallback } from 'react';

const Counter = ({ increment }) => {
  return <button onClick={increment}>Increment</button>;
};

const MemoizedCounter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Memoized Counter (useCallback)</h2>
      <p>Count: {count}</p>
      <Counter increment={increment} />
    </div>
  );
};

export default MemoizedCounter;
