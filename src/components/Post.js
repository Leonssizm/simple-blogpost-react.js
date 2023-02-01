import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Post = () => {
  const params = useParams();

  const [post, setPost] = useState([]);
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + params.postId)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPost(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!isNaN(params.postId) && parseInt(params.postId) <= 100) {
    return (
      <div>
        <h1 className="p-5 d-flex justify-content-center">
          BlogPost N {params.postId}
        </h1>
        <div className="card card-body p-5 d-flex justify-content-center ">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <Link to="/posts" className="btn btn-primary m-5 float-right">
          {' '}
          Go Back{' '}
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <div className="d-flex w-100 h-100 justify-content-center">
          <h1 className="mt-5">Something Went Wrong, Check the Address</h1>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/posts" className="btn btn-primary m-5 float-right">
            {' '}
            Go Back{' '}
          </Link>
        </div>
      </div>
    );
  }
};

export default Post;
