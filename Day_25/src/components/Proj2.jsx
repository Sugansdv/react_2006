import React, { useState, useCallback } from 'react';

//  Memoized Button
const IncrementButton = React.memo(({ onIncrement }) => {
  console.log(' Rendering Button');
  return (
    <button className="btn btn-primary" onClick={onIncrement}>
      Increment
    </button>
  );
});

const Proj2 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  //  Not memoized — this function is recreated on each render
//   const handleIncrement = () => {
//     setCount(prev => prev + 1);
//   };
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mini Project 2: Counter (No useCallback)</h2>

      <div className="mb-3">
        <h4>Count: {count}</h4>
        <IncrementButton onIncrement={handleIncrement} />
      </div>

      <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Try typing here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Proj2;
