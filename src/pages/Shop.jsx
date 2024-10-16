import React, { useState } from "react";
import AddEditForm from "../components/Shop/AddEditForm";
import ItemList from "../components/Shop/ItemList";

const STARTING_ITEMS = [
  { name: "Apples", quantity: "5", price: "1.99" },
  { name: "Bananas", quantity: "6", price: "2.99" },
  { name: "Cherries", quantity: "7", price: "3.99" },
];

export default function Shop() {
  const [items, setItems] = useState(STARTING_ITEMS); // State to store the list
  const [newItem, setNewItem] = useState({ name: "", quantity: "", price: "" }); // State for the new item form
  const [editIndex, setEditIndex] = useState(null); // State to manage editing
  const [addToFront, setAddToFront] = useState(false); // Control where to add (front or back)

  // Adds a new item to the list or saves an edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.quantity || !newItem.price) return;

    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? newItem : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      const updatedItems = addToFront
        ? [newItem, ...items]
        : [...items, newItem];
      setItems(updatedItems);
    }

    setNewItem({ name: "", quantity: "", price: "" });
  };

  // Handles deleting an item
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Handles editing an item
  const handleEditItem = (index) => {
    setEditIndex(index);
    setNewItem(items[index]);
  };

  // Handles moving an item up or down
  const handleMoveItem = (index, direction) => {
    const newPosition = index + direction;
    if (newPosition < 0 || newPosition >= items.length) return;
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(index, 1);
    updatedItems.splice(newPosition, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div>
      <AddEditForm
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
        addToFront={addToFront}
        setAddToFront={setAddToFront}
      />

      <ItemList
        items={items}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
        handleMoveItem={handleMoveItem}
      />
    </div>
  );
}
