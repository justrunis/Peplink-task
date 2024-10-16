import "./AddEditForm.css";
export default function AddEditForm({
  newItem,
  setNewItem,
  handleSubmit,
  editIndex,
  addToFront,
  setAddToFront,
}) {
  return (
    <form className="add-edit-form" onSubmit={handleSubmit}>
      <h3 className="heading">
        {editIndex !== null ? "Edit Item" : "Add New Item"}
      </h3>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        required
      />
      <input
        className="form-input"
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        required
      />
      <input
        className="form-input"
        type="number"
        name="price"
        placeholder="Price"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        required
      />
      {editIndex === null && (
        <label className="form-checkbox">
          <input
            type="checkbox"
            checked={addToFront}
            onChange={(e) => setAddToFront(e.target.checked)}
          />
          Add to the front
        </label>
      )}
      <button className="form-submit-btn" type="submit">
        {editIndex !== null ? "Save Changes" : "Add Item"}
      </button>
    </form>
  );
}
