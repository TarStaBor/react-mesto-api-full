import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      name="add"
      buttonText="Создать"
      children
    >
      <input
        id="place"
        name="form-place"
        type="text"
        placeholder="Название"
        value={name}
        onChange={handleNameChange}
        className="popup__input"
        autoComplete="off"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="place-error popup__input-error"></span>
      <input
        id="link"
        name="form-resource"
        type="url"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkChange}
        className="popup__input"
        autoComplete="off"
        required
      />
      <span className="link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
