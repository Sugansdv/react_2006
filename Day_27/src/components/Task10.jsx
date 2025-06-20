import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task10() {
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const math = await import('../utils/math'); //  Dynamic import
      const sum = math.add(10, 15);
      setResult(sum);
    } catch (error) {
      console.error(" Failed to load math.js", error);
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="text-primary">Task 10: Dynamic Import Utility</h2>
      <button className="btn btn-success mt-3" onClick={handleCalculate}>
        ➕ Calculate 10 + 15
      </button>
      {result !== null && (
        <h4 className="mt-4 text-success">Result: {result}</h4>
      )}
    </div>
  );
}

export default Task10;
