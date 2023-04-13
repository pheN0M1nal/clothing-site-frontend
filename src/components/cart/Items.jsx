import React from "react";
import Item from "./Item";
const Items = ({ items, onDelete }) => {
  return (
    <>
      {items.map(item => (
        <Item key={item.id} item={item} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Items;
