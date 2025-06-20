// src/App.jsx
import React, { lazy, Suspense } from "react";

// 🔁 Lazy load components
const Header = lazy(() => import("./Header"));
const Sidebar = lazy(() => import("./Sidebar"));
const Content = lazy(() => import("./Content"));

function App() {
  return (
    <div className="container-fluid">
      <Suspense fallback={<div className="text-center mt-5">Loading Header...</div>}>
        <Header />
      </Suspense>

      <div className="row">
        <Suspense fallback={<div className="col-3 text-center">Loading Sidebar...</div>}>
          <Sidebar />
        </Suspense>

        <Suspense fallback={<div className="col text-center">Loading Content...</div>}>
          <Content />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
