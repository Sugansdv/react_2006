// Task 6: SSG Example 
const staticData = { title: "Static Post Title from Build" };
export default function SSG() {
  return (
    <div>
      <h2>Task 6: SSG (Simulated) Page</h2>
      <p>{staticData.title}</p>
    </div>
  );
}