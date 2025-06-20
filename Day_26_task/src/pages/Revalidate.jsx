// Task 11: Simulation 
import { useEffect, useState } from 'react';
export default function Revalidate() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/3')
        .then(res => res.json())
        .then(json => setData(json));
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>Task 11: (Simulated) Page</h2>
      <p>{data?.title}</p>
    </div>
  );
}