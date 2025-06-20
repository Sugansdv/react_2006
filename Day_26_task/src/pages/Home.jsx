
// Task 1: Introduction to SSR & SSG
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="container">
      <h1> Task 1: Introduction to SSR & SSG</h1>
      <p><strong>SSR</strong>Server-Side Rendering (SSR) is a technique where a web page is generated 
on the server at request time and sent to the client with fully populated HTML 
content. This improves SEO and initial page load performance. </p>
      <p>Static Site Generation (SSG) pre-renders pages at build time and serves 
them as static HTML files. </p>
      <ul>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/ssr">SSR Example</Link></li>
        <li><Link to="/ssg">SSG Example</Link></li>
        <li><Link to="/compare">Compare SSR & SSG</Link></li>
        <li><Link to="/seo">SEO Page</Link></li>
        <li><Link to="/revalidate">ISR Page</Link></li>
        <li><Link to="/posts/1">Dynamic SSG Page</Link></li>
        <li><Link to="/fallback/1">Fallback Page</Link></li>
      </ul>
    </div>
  );
}