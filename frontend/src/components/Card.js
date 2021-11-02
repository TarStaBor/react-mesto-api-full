import React from "react";
import { CurrentUserContext } from "../context/currentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const like = card.likes;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const cardDeleteButtonClassName = isOwn ? (
    <button type="button" className="elements__trash-button link-opacity" onClick={handleDeleteClick}></button>
  ) : (
    ""
  );
  const isLiked = card.likes.some(item => item === currentUser._id);
  const cardLikeButtonClassName = `${isLiked ? "elements__heart_active" : "elements__heart"} link-opacity`;

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="card-template">
      <div className="elements__card">
        {cardDeleteButtonClassName}
        <img src={card.link} onClick={handleClick} className="elements__photo" alt={card.name} />
        <div className="elements__footer">
          <h2 className="elements__title">{card.name}</h2>
          <div>
            <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
            <h2 className="elements__amount">{like.length}</h2>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
