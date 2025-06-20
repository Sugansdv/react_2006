import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Named chunks using webpackChunkName
const Home = lazy(() => import(/* webpackChunkName: "page-home" */ './pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "page-about" */ './pages/About'));
const Contact = lazy(() => import(/* webpackChunkName: "page-contact" */ './pages/Contact'));

function Task13() {
  return (
    <Router>
      <div className="container">
        <h4>Task 13. Chunk Naming: Customize chunk names in Webpack with /* 
webpackChunkName: "chunkName" */. </h4>
        <nav className="d-flex justify-content-center gap-4 my-4">
          <Link to="/" className="btn btn-outline-success">Home</Link>
          <Link to="/about" className="btn btn-outline-primary">About</Link>
          <Link to="/contact" className="btn btn-outline-info">Contact</Link>
        </nav>

        <Suspense fallback={<div className="text-center">⏳ Loading Page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default Task13;
