import React, { useState } from 'react';

const MemoizedButton = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Increment Count
    </button>
  );
});

function Task4() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const increment = () => setCount(count + 1);

  return (
    <div className="container mt-4">
      <h3>Task 4. React.memo Basic Usage: Wrap a functional component with React.memo 
to prevent re-renders. </h3>
      <p><strong>Count:</strong> {count}</p>
      <MemoizedButton onClick={increment} />

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

export default Task4;
