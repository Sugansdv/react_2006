import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task1() {
  return (
    <div className="container mt-5">
      <div className="shadow p-4 mb-5 bg-white rounded">
        <h3 className="text-primary">Task 1: Introduction to Code Splitting</h3>

        <p className="mt-4">
          <strong> What is Code Splitting?</strong><br />
          Code splitting is a technique to split large JavaScript bundles into smaller files
          that can be loaded as needed, improving performance.
        </p>

        <p className="mt-3">
          <strong>Why does it improve performance?</strong><br />
         It improves performance by reducing the amount of JavaScript loaded initially, 
          enabling faster page loads and a better user experience.
        </p>

        <div className="mt-4">
          <strong>Example:</strong>
          <p className="mb-1">React supports code splitting via dynamic import and <code>React.lazy()</code></p>
          <pre className="bg-light p-2 rounded border">
            <code>const OtherComponent = React.lazy(() =&gt; import('./OtherComponent'));</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Task1;
