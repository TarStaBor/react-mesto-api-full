const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require("../controllers/cards");
const regExp = require("../regexp/regexp");

router.get("/", getCards);

router.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().pattern(regExp),
    }),
  }),
  createCard
);

router.delete(
  "/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().alphanum().length(24).hex(),
    }),
  }),
  deleteCard
);

router.put(
  "/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum().length(24).hex(),
    }),
  }),
  putLike
);

router.delete(
  "/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().alphanum().length(24).hex(),
    }),
  }),
  deleteLike
);

module.exports = router;
