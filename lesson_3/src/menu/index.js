import React from 'react';
import './menu.css';

const Menu = ({items, handleOnMenuClick}) => {
  const menuList = items.map(({name, src, id}) => (
      <a
        className="menu-item"
        href={`#${src}`}
        onClick={event => handleOnMenuClick(event)}
        key={id}
      >
        {name.toUpperCase()}
      </a>
    )
  );

  return (
    <nav className="menu">
      {menuList}
    </nav>
  )
};

export default Menu
