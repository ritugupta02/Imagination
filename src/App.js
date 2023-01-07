import logo from "./logo.svg"
import { useState } from "react";
import Posts from "./Posts"
import './App.css';

function App() {
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [post, setPost] = useState([]);
  console.log(post);
  function imagePreview(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function captionSet(e) {
    console.log(e.target.value)
    setCaption(e.target.value)
  }
  function uploadPost() {

    setPost([...post,<Posts photo={file} caption={caption} />])
    // post.push(<Posts photo={file} caption={caption} />);
    // setPost(post);
  }
  return ( 
    <div className="App">

      <div className="row">
        <div className="col-3 mt-4">
          <div className="card">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                +
              </button>    
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="center">
                      <input type="file" name="myImage" className="form-control-file" accept="image/*" id="photo" onChange={imagePreview} />
                    </div>
                    <img src={file} alt="preview" className="h-25 w-25 mt-4" />
                    <input type="text" className="form-control mt-4" id="caption" placeholder="Write a caption" onChange={captionSet} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={uploadPost}>upload</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div id="posts">
            {post}
          </div>
        </div>

        <div className="col-3">
        </div>
      </div>
    </div>

  );
}

export default App;
