import React, { useState } from "react";

function Login({ authorization }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setisVisiblePassword] = useState("password");

  function handleVisibleChange() {
    setisVisiblePassword(
      isVisiblePassword === "password" ? "text" : "password"
    );
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    authorization(email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <section className="authorization">
        <h2 className="authorization__title">Вход</h2>

      <form
        name=""
        action="#"
        className="authorization__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          id="email"
          className="authorization__input"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
          minLength="2"
          maxLength="40"
          required
        />

        <input
          id="password"
          name="password"
          type={isVisiblePassword}
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
          className="authorization__input"
          autoComplete="off"
          minLength="2"
          maxLength="200"
          required
        />
        <h2
          className="authorization__registered link-opacity"
          style={{ textAlign: "center" }}
          onClick={handleVisibleChange}
        >
          Показать пароль
        </h2>
        <button
          type="submit"
          className="authorization__button link-opacity save-profile"
        >
          Войти
        </button>
      </form>
    </section>
    </>
  );
}
export default Login;
