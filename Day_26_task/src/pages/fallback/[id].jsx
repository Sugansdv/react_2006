// Task 10: Fallback Page 
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function FallbackPage() {

  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(json => setData(json));
  }, [id]);
  if (!data) return <p>Loading...</p>;
  return <p>  Task 10: Fallback Page <br/> {data.title}</p>;
}