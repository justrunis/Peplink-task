import React from "react";
import "./ListItem.css";

export default function ListItem({
  item,
  index,
  handleEditItem,
  handleDeleteItem,
  handleMoveItem,
  isFirst,
  isLast,
}) {
  return (
    <li className="list-item">
      <span className="item-details">
        {item.name} - {item.quantity} units - ${item.price}
      </span>
      <div className="item-actions">
        <button className="edit-btn" onClick={() => handleEditItem(index)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => handleDeleteItem(index)}>
          Delete
        </button>
        <button
          className="move-btn"
          onClick={() => handleMoveItem(index, -1)}
          disabled={isFirst}
        >
          Move Up
        </button>
        <button
          className="move-btn"
          onClick={() => handleMoveItem(index, 1)}
          disabled={isLast}
        >
          Move Down
        </button>
      </div>
    </li>
  );
}
