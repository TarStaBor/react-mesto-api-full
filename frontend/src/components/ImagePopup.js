function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup image ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__img-container">
        <button
          type="button"
          aria-label="Закрыть попап новой карточки"
          onClick={onClose}
          className="popup__close-button link-opacity"
        ></button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <h2 className="popup__subtitle">{card.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
