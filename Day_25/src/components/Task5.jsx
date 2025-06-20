import React, { useState } from 'react';

// Child Component wrapped with React.memo
const Display = React.memo(({ value }) => {
  console.log('🔁 Display component rendered');
  return (
    <div className="alert alert-info">
      <strong>Prop Value:</strong> {value}
    </div>
  );
});

function Task5() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="container mt-4">
      <h3>Task 5: React.memo with Props</h3>

      {/* Only this prop affects the memoized child */}
      <Display value={count} />

      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button className="btn btn-secondary" onClick={() => setOther(other + 1)}>
        Change Other State
      </button>

      <p className="mt-3">
        <strong>Other State:</strong> {other}
      </p>
    </div>
  );
}

export default Task5;
