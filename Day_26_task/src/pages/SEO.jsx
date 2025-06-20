// Task 9: SEO Meta Tags 
import { Helmet } from 'react-helmet';
export default function SEOPage() {
  return (
    <>
      <Helmet>
        <title>Task9 :SEO Example</title>
        <meta name="description" content="This is a SEO optimized page" />
      </Helmet>
      <h1>SEO Page</h1>
    </>
  );
}