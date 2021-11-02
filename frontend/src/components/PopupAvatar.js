import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAvatar({ isOpen, onClose, onUpdateAvatar }) {
  const urlRef = useRef("");

  useEffect(() => {
    urlRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(urlRef.current.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Обновить аватар"
      name="avatar"
      buttonText="Сохранить"
      children
    >
      <input
        id="avatarLink"
        name="form-resource"
        type="url"
        placeholder="Ссылка на картинку"
        ref={urlRef}
        className="popup__input"
        autoComplete="off"
        required
      />
      <span className="avatarLink-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default PopupAvatar;
