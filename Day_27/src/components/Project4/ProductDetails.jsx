const ProductDetails = () => {
  const product = {
    name: "Wireless Headphones",
    price: "$79.99",
    description: "High quality wireless headphones with noise cancellation."
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4>{product.name}</h4>
      <p><strong>Price:</strong> {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
