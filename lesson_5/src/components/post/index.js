import React from 'react';
import './post.css';

const Post = ({title, message}) => {
  return (
    <li className="post">
      <article>
        <h2>{title}</h2>
        <hr/>
        <p>{message}</p>
      </article>
    </li>
  )
};

export default Post
