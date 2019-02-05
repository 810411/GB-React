import React from 'react';
import './post.css';

const Post = ({title, message, handleClick}) => {
  return (
    <li className="post">
      <article>
        <h2 onClick={handleClick}>{title}</h2>
        <hr/>
        <p>{message}</p>
      </article>
    </li>
  )
};

export default Post
