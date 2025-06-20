import React, { useState, useCallback } from 'react';

// Child component (memoized)
const ActionButton = React.memo(({ label, onClick }) => {
  console.log(`${label} button rendered`);
  return (
    <button className="btn btn-outline-primary me-2" onClick={onClick}>
      {label}
    </button>
  );
});

function Task10() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // useCallback prevents function recreation unless dependencies change
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const toggleState = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Task 10: Avoid Inline Functions using useCallback</h3>

      <p><strong>Count:</strong> {count}</p>
      <p><strong>Toggle:</strong> {toggle ? 'ON' : 'OFF'}</p>

      {/* Avoiding inline functions below by using memoized callbacks */}
      <ActionButton label="Increment" onClick={increment} />
      <ActionButton label="Decrement" onClick={decrement} />
      <ActionButton label="Toggle" onClick={toggleState} />
    </div>
  );
}

export default Task10;
