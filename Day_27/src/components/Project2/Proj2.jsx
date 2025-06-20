import React, { lazy, Suspense } from "react";

const Image1 = lazy(() => import("./Image1"));
const Image2 = lazy(() => import("./Image2"));
const Image3 = lazy(() => import("./Image3"));

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Mini Project 2: Image Gallery </h2>
      <div className="row g-3">
        <Suspense fallback={<p>Loading Image 1...</p>}>
          <Image1 />
        </Suspense>
        <Suspense fallback={<p>Loading Image 2...</p>}>
          <Image2 />
        </Suspense>
        <Suspense fallback={<p>Loading Image 3...</p>}>
          <Image3 />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
