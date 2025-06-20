import React, { useState, useMemo } from 'react';

function Task6() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Expensive computation simulated with a delay
  const expensiveCalculation = (num) => {
    console.log(' Calculating...');
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += num * 2;
    }
    return result;
  };

  // useMemo to cache the expensive calculation result
  const cachedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div className="container mt-4">
      <h3>Task 6: useMemo Basic Example</h3>

      <div className="mb-3">
        <label className="form-label">Enter a number:</label>
        <input
          type="number"
          className="form-control"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        />
      </div>

      <p><strong>Expensive Computation Result:</strong> {cachedValue}</p>

      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <p className="mt-2"><strong>Count:</strong> {count}</p>
    </div>
  );
}

export default Task6;
