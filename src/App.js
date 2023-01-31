import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
