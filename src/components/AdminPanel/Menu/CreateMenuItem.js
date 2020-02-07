import React, { useState } from "react";
import { useRef } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const CreateMenuItem = ({ handleAddNewItem }) => {
  const initState = {
    product: {
      name: "",
      ing: "",
      enable: true,
      price: ""
    }
  };
  const [newItem, setNewItem] = useState(initState);
  const nameInput = useRef(null);
  const handleInput = e => {
    const copyItem = { ...newItem };
    if (e.target.type === "checkbox") {
      copyItem.product[e.target.name] = !copyItem.product[e.target.name];
    } else {
      copyItem.product[e.target.name] = e.target.value;
    }
    setNewItem(copyItem);
  };
  const handleSubmit = e => {
    handleAddNewItem(newItem.product, e);
    setNewItem(initState);
    nameInput.current.focus();
  };
  const randId = Math.random();
  return (
    <form className="admin-menu__item" onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        name="name"
        type="text"
        value={newItem.product.name}
        ref={nameInput}
        placeholder="Nazwa"
        required
      />

      <input
        type="text"
        onChange={handleInput}
        name="ing"
        placeholder="Składniki"
        value={newItem.product.ing}
      />
      <label className="enable" htmlFor={randId}>
        {newItem.product.enable ? <MdVisibility /> : <MdVisibilityOff />}
      </label>
      <input
        onChange={handleInput}
        id={randId}
        name="enable"
        type="checkbox"
        checked={newItem.product.enable}
      />

      <input
        onChange={handleInput}
        name="price"
        type="number"
        placeholder="Cena"
        value={newItem.product.price}
        required
      />

      <button className="admin-menu__button admin-menu__button--add">Dodaj</button>
      <div></div>
      <div></div>
    </form>
  );
};

export default CreateMenuItem;
