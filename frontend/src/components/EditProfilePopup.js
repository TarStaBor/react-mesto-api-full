import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../context/currentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="edit"
      buttonText="Сохранить"
      children
    >
      <input
        id="name-input"
        className="popup__input"
        name="name"
        type="text"
        placeholder={"Имя"}
        value={name || ""}
        onChange={handleNameChange}
        autoComplete="off"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="name-input-error popup__input-error"></span>
      <input
        id="job-input"
        name="about"
        type="text"
        placeholder={"О себе"}
        value={description || ""}
        onChange={handleDescriptionChange}
        className="popup__input"
        autoComplete="off"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="job-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
