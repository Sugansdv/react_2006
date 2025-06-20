import React, { useState, useCallback } from 'react';

// Child component that only re-renders if props change
const ChildButton = React.memo(({ onClick }) => {
  console.log('ChildButton rendered');
  return (
    <button className="btn btn-success" onClick={onClick}>
      Increment Count
    </button>
  );
});

function Task8() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useCallback to memoize the handler
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Task 8: useCallback Basic Example</h3>

      <p><strong>Count:</strong> {count}</p>
      <ChildButton onClick={handleIncrement} />

      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Task8;
