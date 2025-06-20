import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SSR from './pages/SSR';
import SSG from './pages/SSG';
import Compare from './pages/Compare';
import SEOPage from './pages/SEO';
import Revalidate from './pages/Revalidate';
import Post from './pages/posts/[id]';
import FallbackPage from './pages/fallback/[id]';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ssr" element={<SSR />} />
        <Route path="/ssg" element={<SSG />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/seo" element={<SEOPage />} />
        <Route path="/revalidate" element={<Revalidate />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/fallback/:id" element={<FallbackPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;