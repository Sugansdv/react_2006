import React, { useState, useMemo } from 'react';

const Proj3 = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    'Apple', 'Banana', 'Orange', 'Mango', 'Grapes',
    'Watermelon', 'Pineapple', 'Strawberry', 'Blueberry', 'Papaya',
    'Guava', 'Lemon', 'Cherry', 'Peach', 'Kiwi'
  ];

  // Memoized filtering
  const filteredSuggestions = useMemo(() => {
    console.log('🔍 Filtering suggestions...');
    return data.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mini Project 3: Search Suggestion App</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a fruit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm && (
        <ul className="list-group">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item}
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No suggestions found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Proj3;
