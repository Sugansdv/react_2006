import React, { useState, useMemo } from 'react';

// Simulated expensive calculation (e.g., factorial with delay)
const expensiveCalculation = (num) => {
  console.log('⚙️ Performing expensive calculation...');
  let result = 1;
  for (let i = 1; i <= num; i++) {
    // Simulate load
    for (let j = 0; j < 100000000; j++) {} // fake heavy loop
    result *= i;
  }
  return result;
};

const Proj4 = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  // useMemo to memoize expensive result
  const factorial = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mini Project 4: Expensive Calculation App</h2>

      <div className="mb-3">
        <label className="form-label">Enter a number:</label>
        <input
          type="number"
          className="form-control"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
          min="1"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Unrelated input:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <h5>Factorial of {number} is:</h5>
      <div className="alert alert-info">{factorial}</div>
    </div>
  );
};

export default Proj4;
