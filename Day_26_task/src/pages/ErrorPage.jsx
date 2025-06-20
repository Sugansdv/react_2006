// Task 13: Error Handling 
export default function ErrorPage({ statusCode }) {
  return (
    <p>Task13: Error Handling 
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  );
}