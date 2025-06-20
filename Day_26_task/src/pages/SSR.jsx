// Task 5: SSR Example
import { useEffect, useState } from 'react';
export default function SSR() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);
  return (
    <div>
      <h2>Task5: SSR (Simulated) Page</h2>
      <p>{data?.title}</p>
    </div>
  );
}