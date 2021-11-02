function PopupWithForm({
  isOpen,
  onClose,
  onSubmit,
  title,
  name,
  buttonText,
  children,
}) {
  return (
    <section className={`popup ${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть попап редактирования профиля"
          className="popup__close-button link-opacity"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>

        <form
          name={`${name}-form`}
          action="#"
          className="popup__form"
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            className="popup__save-button link-opacity save-profile"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
