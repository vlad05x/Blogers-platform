import React, { useState } from "react";
import BurgerMenu from "../BurgerMenu";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = (isActive) => {
    setBurgerActive(isActive);
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a>Logo</a>
        </div>
        <nav className={`header_menu menu ${burgerActive ? "active" : ""}`}>
          <div className="language-selector">
            <span className="language-option" data-lang="en">
              Eng
            </span>{" "}
            |
            <span className="language-option" data-lang="uk">
              Ukr
            </span>
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#help" className="nav-link">
                Допомога
              </a>
            </li>
            <li className="menu-item">
              <a href="#blog" className="nav-link">
                Блог
              </a>
            </li>
            <li className="menu-item">
              <a href="#learning" className="nav-link">
                Навчання
              </a>
            </li>
            <li className="menu-item">
              <a href="#catalog" className="nav-link">
                Каталог блогерів
              </a>
            </li>
          </ul>
          <div className="auth_button">
            <button className="main_btn sigin-btn">Вхід</button>
            <button className="main_btn sigup-btn">Реєстрація</button>
          </div>
        </nav>
        <BurgerMenu onClick={handleBurgerClick} isActive={burgerActive} />
      </div>
    </header>
  );
};

export default Header;
