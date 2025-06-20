import React, { useState, useCallback } from 'react';

// Child component using memo to avoid unnecessary re-renders
const MultiplierButton = React.memo(({ onMultiply }) => {
  console.log('🔁 MultiplierButton rendered');
  return (
    <button className="btn btn-warning" onClick={onMultiply}>
      Multiply Number
    </button>
  );
});

function Task9() {
  const [number, setNumber] = useState(2);
  const [factor, setFactor] = useState(5);
  const [result, setResult] = useState(null);

  // useCallback memoizes the function — updates only when `number` or `factor` changes
  const handleMultiply = useCallback(() => {
    setResult(number * factor);
  }, [number, factor]);

  return (
    <div className="container mt-4">
      <h3>Task 9: useCallback with Dependencies</h3>

      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Number:</label>
          <input
            type="number"
            className="form-control"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="col">
          <label className="form-label">Factor:</label>
          <input
            type="number"
            className="form-control"
            value={factor}
            onChange={(e) => setFactor(parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      <MultiplierButton onMultiply={handleMultiply} />

      {result !== null && (
        <p className="mt-3"><strong>Result:</strong> {number} × {factor} = {result}</p>
      )}
    </div>
  );
}

export default Task9;
