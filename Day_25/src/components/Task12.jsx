import React, { useState, useMemo } from 'react';

// Pure function: No side effects, returns same output for same input
const calculateTotalPrice = (items) => {
  console.log(' Calculating total price...');
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

//  Pure presentational component
const ItemList = React.memo(({ items }) => {
  console.log('ItemList rendered');
  return (
    <ul className="list-group mb-3">
      {items.map((item, index) => (
        <li className="list-group-item d-flex justify-content-between" key={index}>
          <span>{item.name}</span>
          <span>{item.quantity} × ₹{item.price}</span>
        </li>
      ))}
    </ul>
  );
});

function Task12() {
  const [items, setItems] = useState([
    { name: 'Apple', price: 20, quantity: 2 },
    { name: 'Banana', price: 10, quantity: 5 }
  ]);
  const [text, setText] = useState('');

  // Memoize the expensive pure function
  const total = useMemo(() => calculateTotalPrice(items), [items]);

  return (
    <div className="container mt-4">
      <h3>Task 12: Optimization with Pure Functions</h3>

      <ItemList items={items} />
      <h5>Total Price: ₹{total}</h5>

      <input
        className="form-control mt-3"
        placeholder="Just to trigger re-render"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default Task12;
