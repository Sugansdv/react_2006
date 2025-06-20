import React, { useState, useMemo } from 'react';

function Proj1() {
   const [searchTerm, setSearchTerm] = useState('');

  const names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve',
    'Frank', 'Grace', 'Hannah', 'Ivan', 'Jack',
    'Karen', 'Leo', 'Mona', 'Nina', 'Oscar'
  ];

  // useMemo to memoize the filtered list
  const filteredNames = useMemo(() => {
    console.log('Filtering names...');
    return names.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mt-5 w-50">
      <h2 className="mb-4 text-center">Mini Project 1: List Filtering</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search names..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="list-group">
        {filteredNames.map((name, index) => (
          <li key={index} className="list-group-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Proj1