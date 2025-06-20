import React, { useState } from 'react';

// Expensive child component
const HeavyComponent = () => {
  console.log(' HeavyComponent rendered');
  let now = performance.now();
  while (performance.now() - now < 50) {} // simulate 50ms delay
  return <div className="alert alert-warning">Heavy Component Loaded</div>;
};

function Task11() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="container mt-4">
      <h3>Task 11: Component Profiling with React DevTools</h3>

      <button className="btn btn-primary mb-3" onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>

      <input
        type="text"
        className="form-control mb-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />

      <HeavyComponent />
    </div>
  );
}

export default Task11;
