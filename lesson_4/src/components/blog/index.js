import React from 'react';
import './blog.css';
import Post from "../post";

const Blog = ({posts}) => {
  const blogList = posts.map(post => (
      <Post {...post}/>
    )
  );

  return (
    <ul className="blog">
      {blogList}
    </ul>
  )
};

export default Blog
