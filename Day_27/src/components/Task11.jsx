import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task11() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleConvert = async () => {
    try {
      const stringUtils = await import('../utils/stringUtils'); 
      const result = stringUtils.toTitleCase(input);
      setOutput(result);
    } catch (err) {
      console.error('❌ Failed to load utility function:', err);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h3 className="text-primary">Task 11: Code Splitting with Functions</h3>

      <input
        type="text"
        className="form-control mt-4"
        placeholder="Enter text to convert..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button className="btn btn-warning mt-3" onClick={handleConvert}>
        Convert to Title Case
      </button>

      {output && <h5 className="mt-4 text-success">Result: {output}</h5>}
    </div>
  );
}

export default Task11;
