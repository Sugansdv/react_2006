import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task1() {
  return (
    <div className="container my-4">
      <div className="card shadow p-2">
          <h3 className="card-title text-primary mb-3">Task 1: Introduction to Performance Optimization</h3>
          <p className="card-text">
            Performance optimization in React is the process of improving the efficiency of a React app by reducing unnecessary renders, computations, or resource usage. 
            In large applications, every component update can cause re-renders—even when not needed—which slows down the app and affects user experience. 
            Optimization helps make the app faster, smoother, and more responsive.
          </p>
        </div>
    </div>
  );
}

export default Task1;
