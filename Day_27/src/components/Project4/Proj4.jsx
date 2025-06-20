import React, { lazy, Suspense } from "react";

// Lazy load sections
const ProductDetails = lazy(() => import("./ProductDetails"));
const Reviews = lazy(() => import("./Reviews"));
const Suggestions = lazy(() => import("./Suggestions"));

function Proj4() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Mini Project 4: E-Commerce Product Page </h2>

      <Suspense fallback={<p>Loading Product Details...</p>}>
        <ProductDetails />
      </Suspense>

      <hr />

      <Suspense fallback={<p>Loading Reviews...</p>}>
        <Reviews />
      </Suspense>

      <hr />

      <Suspense fallback={<p>Loading Suggestions...</p>}>
        <Suggestions />
      </Suspense>
    </div>
  );
}

export default Proj4;
