import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Task1 from './Task1';
import Task10 from './Task10';
import Task11 from './Task11';
import Task13 from './Task13';
import ErrorBoundary from './ErrorBoundary';
const Header = lazy(() => import('./pages/Header'));
const About = lazy(() => import('./pages/About'));
const Footer = lazy(() => import('./pages/Footer'));
const Contact = lazy(() => import('./pages/Contact'));
function Task() {
  return (
   <>
    <Task1 />
    <br /> <hr />
     <div className="container mt-5">
      <div className="shadow p-4 mb-5 bg-white rounded">
        <h3 className="text-success">Task 2: Install Project using create-react-app</h3>
        </div>
        </div>
        <br /> <hr />

         <div className="container mt-4">
            <h3 className="text-success">Task 3: Basic Component Creation: </h3>
            <h3 className="text-success">Task 7. Multiple Lazy Components: Lazy load both Header and Footer components 
with Suspense.</h3>
<h3 className="text-success">Task 8. Error Handling with Suspense: Show an error message if the component 
fails to load. </h3>
            
     <ErrorBoundary>
        <Suspense fallback={<div className="text-center text-primary">Loading Header...</div>}>
          <Header />
        </Suspense>
      </ErrorBoundary>

      <main className="text-center my-5">
        <h2>Main Content</h2>
        <p>This is the main section of the app.</p>
      </main>

     <ErrorBoundary>
        <Suspense fallback={<div className="text-center text-muted">Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
        <br /> <hr />

    <div className="container mt-4">
         <h3 className="text-success">Task 4. Default Import: Import components normally without lazy loading. </h3>
      <Header />

      <main className="text-center my-5">
        <h2>Main Content</h2>
        <p>This is the main section of the app.</p>
      </main>

      <Footer />
    </div>

    <br /> <hr />

    <div className="container mt-4">
        <h3 className="text-success">Task 5. React.lazy Setup: Refactor one component to use React.lazy.  </h3>
         <h3 className="text-success">Task 6. Suspense Usage: Wrap the lazy-loaded component with Suspense and add 
a fallback loading message.   </h3>
      <Header />

      <main className="text-center my-5">
        <h2>Main Content</h2>
        <p>This is the main section of the app.</p>
      </main>

      <Suspense fallback={<div className="text-center">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>

  <br /> <hr />

   <Router>
      <div className="container">
        <h4 className="text-success">Task 9. Lazy Loaded Routes: Use React.lazy with React Router to lazy load page 
components. </h4>
        <nav className="d-flex justify-content-center gap-4 my-4">
          <Link to="/" className="btn btn-outline-success">Home</Link>
          <Link to="/about" className="btn btn-outline-primary">About</Link>
          <Link to="/contact" className="btn btn-outline-info">Contact</Link>
        </nav>

        <Suspense fallback={<div className="text-center">⏳ Loading Page...</div>}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  <br /> <hr />

  <Task10 />

   <br /> <hr />

  <Task11 />

     <br /> <hr />

  <Task13 />
    
   </>
  )
}

export default Task