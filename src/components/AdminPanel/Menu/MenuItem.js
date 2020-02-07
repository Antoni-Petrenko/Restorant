import React, { useState } from "react";
import { FaTimesCircle, FaTrashAlt, FaUpload } from "react-icons/fa";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const MenuItem = ({
  name,
  ing,
  enable,
  price,
  handleFormSubmit,
  handleDeletElement,
  handleTouched
}) => {
  const [newItem, setNewItem] = useState({
    status: { isSaved: true },
    product: { name, ing, enable, price }
  });

  const handleInput = e => {
    const copyItem = { ...newItem };
    copyItem.status.isSaved = false;
    e.target.type === "checkbox"
      ? (copyItem.product[e.target.name] = !copyItem.product[e.target.name])
      : (copyItem.product[e.target.name] = e.target.value);
    setNewItem(copyItem);
  };

  const handleSaveChange = e => {
    const copyStatus = { ...newItem };
    copyStatus.status.isSaved = true;
    setNewItem(copyStatus);
    handleFormSubmit(newItem.product, e);
  };

  const randId = Math.random();

  return (
    <form className="admin-menu__item" onSubmit={handleSaveChange}>
      <input
        onChange={handleInput}
        name="name"
        type="text"
        value={newItem.product.name}
      />

      <input
        type="text"
        onChange={handleInput}
        name="ing"
        value={newItem.product.ing}
      />
      <label className="enable" htmlFor={randId}>
        {newItem.product.enable ? <MdVisibility /> : <MdVisibilityOff />}
      </label>
      <input
        id={randId}
        onChange={handleInput}
        name="enable"
        type="checkbox"
        checked={newItem.product.enable}
      />

      <input
        onChange={handleInput}
        name="price"
        type="number"
        value={newItem.product.price}
      />

      <button
        disabled={newItem.status.isSaved}
        className="admin-menu__button admin-menu__button--add"
      >
        Aktualizuj
      </button>
      <a href="/" className="admin-menu__button" onClick={handleDeletElement}>
        <FaTrashAlt />
      </a>
      <span className="admin-menu__isUpload">
        {newItem.status.isSaved ? (
          <FaUpload color="green" />
        ) : (
          <FaTimesCircle color="red" />
        )}
      </span>
    </form>
  );
};

export default MenuItem;
