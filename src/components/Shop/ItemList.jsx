import React from "react";
import ListItem from "./ListItem";
import "./ItemList.css";

export default function ItemList({
  items,
  handleEditItem,
  handleDeleteItem,
  handleMoveItem,
}) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          index={index}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
          handleMoveItem={handleMoveItem}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
}
