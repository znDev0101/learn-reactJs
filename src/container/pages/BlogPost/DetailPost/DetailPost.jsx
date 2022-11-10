import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

const DetailPost = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  let { PostID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3004/posts/${PostID}`)
      .then((response) => response.json())
      .then((response) => {
        setTitle(response.title);
        setBody(response.body);
      });
  }, []);

  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{body}</p>
    </Fragment>
  );
};

export default DetailPost;
