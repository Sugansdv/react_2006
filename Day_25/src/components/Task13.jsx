import React, { useState, useMemo, useCallback } from 'react';

// ✅ Memoized Child Component
const ProductList = React.memo(({ products, onAddToCart }) => {
  console.log('🔁 ProductList rendered');
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-3" key={product.id}>
          <div className="card">
            <div className="card-body">
              <h5>{product.name}</h5>
              <p>Price: ₹{product.price}</p>
              <button className="btn btn-success" onClick={() => onAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

function Task13() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');

  // ✅ useMemo to memoize products (simulate fetched/processed data)
  const products = useMemo(
    () => [
      { id: 1, name: 'Phone', price: 9999 },
      { id: 2, name: 'Headphones', price: 2999 },
      { id: 3, name: 'Keyboard', price: 1999 },
    ],
    []
  );

  // ✅ useCallback to memoize handler passed to child
  const handleAddToCart = useCallback(
    (product) => {
      setCart((prev) => [...prev, product]);
    },
    []
  );

  return (
    <div className="container mt-4">
      <h3>Task 13: Prevent Unnecessary Re-renders</h3>

      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Search (doesn't affect products)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <ProductList products={products} onAddToCart={handleAddToCart} />

      <button className="btn btn-primary mt-3" onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>

      <h5 className="mt-3">Cart: {cart.length} items</h5>
    </div>
  );
}

export default Task13;
