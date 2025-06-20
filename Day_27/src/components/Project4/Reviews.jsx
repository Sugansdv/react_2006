const Reviews = () => {
  const reviews = [
    { user: "John", comment: "Excellent sound quality!" },
    { user: "Anna", comment: "Very comfortable to wear." }
  ];

  return (
    <div className="card p-3 shadow-sm">
      <h5>⭐ Customer Reviews</h5>
      <ul className="list-group list-group-flush">
        {reviews.map((r, i) => (
          <li key={i} className="list-group-item">
            <strong>{r.user}</strong>: {r.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
