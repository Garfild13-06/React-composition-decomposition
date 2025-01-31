import React from "react";

/**
 * Шапка страницы с логотипом, строкой поиска и навигацией.
 */
const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Яндекс</h1>
      <input type="text" placeholder="Найти..." />
      <nav>
        <a href="#">Видео</a>
        <a href="#">Картинки</a>
        <a href="#">Новости</a>
        <a href="#">Карты</a>
      </nav>
    </header>
  );
};

export default Header;
