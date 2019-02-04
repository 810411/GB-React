import React from 'react';
import './post.css';

const Post = ({head, subhead, paragraph, date, name}) => {
  return (
    <li>
      <article className="post">
        <h2>{head}</h2>
        <hr/>
        <h3>{subhead}</h3>
        <p>{paragraph}</p>
        <hr/>
        <p><span className="date">{date}</span><span className="name">{name}</span></p>
      </article>
    </li>
  )
};

export default Post
