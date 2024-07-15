import React from "react";
import MainPhoto from "../images/main-photo.svg";

function Main() {
  return (
    <div className="wrapper">
      <main className="main">
        <div className="main__container">
          <div className="main_content">
            <h1 className="main_content__title">
              EPICSTARS — платформа, объединяющая <span style={{ textDecoration: 'underline' }}>рекламодателей</span> и <span style={{ textDecoration: 'underline' }}>блогеров</span>
            </h1>
            <p className="main_content__text">
              Помогаем брендам и компаниям транслировать свои маркетинговые
              активности через лидеров мнений и блогеров
            </p>
            <button className="main_btn">Давайте начнем!</button>
          </div>
          <img
            className="main_photo"
            src={MainPhoto}
            alt="Описание изображения"
          />
        </div>
      </main>
    </div>
  );
}

export default Main;
