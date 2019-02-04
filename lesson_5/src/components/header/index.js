import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './menu.css';

const Header = () => {
  return (
    <header>
      <nav className="menu">
        <Link to="/" className="menu-logo">TypicodeBLOG</Link>
        <NavLink to="/posts" className="menu-item" activeClassName="menu-active">Posts</NavLink>
        <NavLink to="/comments" className="menu-item" activeClassName="menu-active">Comments</NavLink>
        <NavLink to="/users" className="menu-item" activeClassName="menu-active">Users</NavLink>
      </nav>
    </header>
  )
};

export default Header
