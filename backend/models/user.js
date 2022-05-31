const mongoose = require("mongoose");
const isEmail = require("validator/lib/isEmail");
const bcrypt = require("bcrypt");
const { isURL } = require("validator");
const regExp = require("../regexp/regexp");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: "Имя пользователя",
    },

    about: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: "О себе",
    },

    avatar: {
      type: String,
      minlength: 3,
      default:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      validate: {
        validator: (v) => isURL(v),
        message: "Неправильный формат URL",
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => isEmail(v),
        message: "Неправильный формат почты",
      },
    },

    password: {
      type: String,
      required: true,
      minlength: 2,
      select: false,
    },
  },
  { versionKey: false }
);

userSchema
  .path("avatar")
  .validate((val) => regExp.test(val), "Неправильный формат URL");

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          return Promise.reject(new Error("Неправильные почта или пароль"));
        }
        return user;
      });
    });
};
module.exports = mongoose.model("user", userSchema);
