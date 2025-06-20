import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UnoptimizedChild = ({ label }) => {
  console.log("Child component rendered:", label);
  return <button className="btn btn-secondary">{label}</button>;
};

function Task3() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-4">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title text-danger mb-3">Task 3: Identify Performance Issues</h3>
          <p className="card-text">
             <strong>React DevTools Profiler</strong> to detect unnecessary re-renders.
            In the example below, clicking the button increments the count, but the child button
            also re-renders—even though its props haven’t changed.
          </p>
          <h5>Count: {count}</h5>
          <button className="btn btn-primary me-3" onClick={() => setCount(count + 1)}>
            Increment Count
          </button>
          <UnoptimizedChild label="Static Button" />
        </div>
      </div>
    </div>
  );
}

export default Task3;
