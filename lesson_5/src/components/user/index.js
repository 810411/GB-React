import React from 'react';
import './user.css';

const User = ({nickname, name, email, phone, website}) => {
  return (
    <li className="user">
      <article>
        <h2>{nickname}</h2>
        <hr/>
        <h3>{name}</h3>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <p>website: <a href={`http://${website}`}>{website}</a></p>
      </article>
    </li>
  )
};

export default User
