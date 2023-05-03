import React from "react";
import Item from "./Item";

const Items = ({ items, onDelete, onInc, onDec }) => {
  return (
    <>
      {items.map(item => (
        <Item
          key={item?._id}
          item={item}
          onDelete={onDelete}
          onIncrement={onInc}
          onDecrement={onDec}
        />
      ))}
    </>
  );
};

export default Items;
