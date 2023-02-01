import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import Posts from './components/Posts';
import Post from './components/Post';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
