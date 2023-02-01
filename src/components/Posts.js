import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <div>
        <h1 className="p-5 d-flex justify-content-center">Posts</h1>
        <div className="p-5 text-center">
          <Link to="/create" className="btn btn-success">
            Add Post
          </Link>
        </div>
      </div>
      {posts &&
        posts.length > 0 &&
        posts.map((post, index) => (
          <div key={post.id} className="container border border-3 rounded mt-3">
            <p className="mt-2">Post N{post.id} </p>
            <h3 className="d-flex justify-content-center mt-3">{post.title}</h3>
            <p className="mt-4">{post.body}</p>
            <div className="btn-wrapper d-flex justify-content-around mb-3 mt-3">
              <Link to={'/posts/' + post.id} className="btn btn-primary">
                View
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
