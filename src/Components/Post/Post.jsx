import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import './post.css';
const Post = (props) => {
  const navigate = useNavigate();

  return (
    <div className="blogPost-Content">
      <div className="img-content">
        <div className="img-here">image here</div>
      </div>
      <div className="blog-content">
        <h5 onClick={() => navigate(`/detail-post/${props.data.id}`)}>{props.data.title}</h5>
        <p>{props.data.body}</p>
        <button onClick={() => navigate(`/update-post/${props.data.id}`)} className="button-update">
          Update
        </button>
        <button
          onClick={() => {
            if (window.confirm('apakah yakin data ini ingin di hapus?')) props.delete(props.data.id);
          }}
          className="button-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
