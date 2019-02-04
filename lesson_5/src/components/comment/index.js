import React from 'react';
import './comment.css';

const Comment = ({name, email, comment}) => {
  return (
    <li className="comment">
      <article>
        <h3>{name} (<small>{email}</small>)</h3>
        <p>{comment}</p>
      </article>
    </li>
  )
};

export default Comment
