// Task 8: Compare SSR vs SSG 
import { Link } from 'react-router-dom';
export default function Compare() {
  return (
    <div>
      <h2>Task 8: Compare SSR vs SSG </h2>
      <Link to="/ssr">SSR</Link> | <Link to="/ssg">SSG</Link>
    </div>
  );
}