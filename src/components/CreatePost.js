import { Link } from 'react-router-dom';

const CreatePost = () => {
  const sendData = () => {
    const data = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(response => {
      response.json();
      if (response.ok) {
        const popup = document.getElementById('popup');
        popup.classList.remove('invisible');
        popup.classList.add('visible');
      }
    });
  };
  const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.classList.remove('visible');
    popup.classList.add('invisible');
  };
  return (
    <div>
      <h1 className="p-5 d-flex justify-content-center"> Add Post </h1>
      <div className="d-flex flex-column align-items-center ">
        <div className="form-group w-25 ">
          <input
            type="text"
            id="title"
            className="form-control mb-3"
            placeholder="Title"
            v-model="titleInputValue"
          />
          <textarea
            id="body"
            className="form-control mt-3"
            placeholder="Body"
            v-model="bodyInputValue"
          ></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-center p-5 ">
        <button className="btn btn-primary mr-5" onClick={() => sendData()}>
          {' '}
          Create{' '}
        </button>
        <Link to="/posts" className="btn btn-danger">
          {' '}
          Cancel{' '}
        </Link>
      </div>

      <div className="popup-wrapper invisible" id="popup">
        <div className="popup">
          <h1 className="header">Post has been recorded</h1>
          <div className="popup-btn-wrapper">
            <Link className="btn btn-primary" to="/posts">
              Main Page
            </Link>
            <button className="btn btn-danger" onClick={() => closePopup()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
