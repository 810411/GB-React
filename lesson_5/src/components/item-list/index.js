import React from 'react';
import './item-list.css';

const ItemList = props => {
  const Item = props.item;

  const itemList = props.data.map(item => (
      <Item key={item.id} {...item}/>
    )
  );

  return (
    <ul className="item-list">
      {itemList}
    </ul>
  )
};

export default ItemList
