const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const {
  getUsers,
  getUser,
  getUserMe,
  patchUser,
  patchAvatar,
} = require("../controllers/users");
const regExp = require("../regexp/regexp");

router.get("/", getUsers);

router.get("/me", getUserMe);

router.get(
  "/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().alphanum().length(24).hex(),
    }),
  }),
  getUser
);

router.patch(
  "/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      about: Joi.string().required().min(2).max(30),
    }),
  }),
  patchUser
);

router.patch(
  "/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().required().pattern(regExp),
    }),
  }),
  patchAvatar
);

module.exports = router;
