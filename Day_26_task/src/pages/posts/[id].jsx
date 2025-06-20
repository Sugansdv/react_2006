// Task 7: Dynamic SSG 
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Post() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(json => setData(json));
  }, [id]);
  return (
    <div>
      <h4>Task 7: Dynamic SSG </h4>
      <h2>Post: {id}</h2>
      <p>{data?.title}</p>
    </div>
  );
}