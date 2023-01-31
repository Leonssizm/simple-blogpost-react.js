import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const landing = () => {
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5">
        Hello, Would you Like To see All Posts?
      </h1>
      <div className="d-flex justify-content-center mt-5">
        <Link to="./posts" className="btn btn-primary">
          All Posts
        </Link>
      </div>
    </div>
  );
};

export default landing;
