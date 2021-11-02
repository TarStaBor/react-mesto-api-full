import React from "react";
import success from "../images/success.svg";
import fail from "../images/fail.svg";

function InfoTooltip({ isInfoTooltipOpen, isSuccess, onClose }) {
  const textSuccess = "Вы успешно зарегистрировались!";
  const textFail = "Что-то пошло не так! Попробуйте ещё раз.";
  return (
    <section className={`popup ${isInfoTooltipOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть попап редактирования профиля"
          className="popup__close-button link-opacity"
          onClick={onClose}
        ></button>
        <img
          src={isSuccess ? success : fail}
          style={{ paddingTop: 60 }}
          alt={isSuccess ? textSuccess : textFail}
        />
        <h2
          className="popup__title"
          style={{
            textAlign: "center",
            padding: 0,
            marginLeft: 0,
            marginBottom: 60,
            marginTop: 32,
          }}
        >
          {isSuccess ? textSuccess : textFail}
        </h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
