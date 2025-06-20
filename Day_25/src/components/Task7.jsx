import React, { useState, useMemo } from 'react';

function Task7() {
  const [num, setNum] = useState(5);
  const [count, setCount] = useState(0);

  // Expensive computation
  const factorial = (n) => {
    console.log('Calculating factorial...');
    if (n <= 0) return 1;
    return n * factorial(n - 1);
  };

  // Memoized factorial - recalculates only when `num` changes
  const memoizedFactorial = useMemo(() => factorial(num), [num]);

  return (
    <div className="container mt-4">
      <h3>Task 7: useMemo with Dependency Array</h3>

      <div className="mb-3">
        <label className="form-label">Enter a number:</label>
        <input
          type="number"
          className="form-control"
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value) || 0)}
        />
      </div>

      <p><strong>Factorial:</strong> {memoizedFactorial}</p>

      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
    </div>
  );
}

export default Task7;
