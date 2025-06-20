const Suggestions = () => {
  const products = ["Bluetooth Speaker", "Phone Case", "USB-C Cable"];

  return (
    <div className="card p-3 shadow-sm">
      <h5>You May Also Like</h5>
      <ul className="list-group list-group-flush">
        {products.map((p, i) => (
          <li key={i} className="list-group-item">{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
