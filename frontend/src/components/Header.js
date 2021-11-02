import logo from "../images/header-logo.svg";
import { Route, Link } from "react-router-dom";

function Header({ signOut, userEmail }) {

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип 'Mesto Russia'" />
      <Route path="/signin">
        <Link className="header__link link-opacity" to="/signup">
          Регистрация
        </Link>
      </Route>

      <Route path="/signup">
        <Link className="header__link link-opacity" to="/signin">
          Войти
        </Link>
      </Route>

      <Route exact path="/">
        <h2 className="header__link" style={{ marginLeft: "auto", marginRight: "24px" }}>
          {userEmail}
        </h2>
        <Link className="header__link link-opacity" onClick={signOut} style={{ color: "#A9A9A9" }} to="/signin">
          Выйти
        </Link>
      </Route>
    </header>
  );
}

export default Header;