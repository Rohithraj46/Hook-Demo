import React, { useMemo, useState } from 'react';

const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log('Expensive calculation running...');
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>Expensive Calculation (useMemo)</h2>
      <p>Number: {number}</p>
      <p>Calculated value: {expensiveCalculation}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveCalculation;
