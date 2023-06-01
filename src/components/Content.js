import React from "react";
import "../App.css";
import "./Content.css";
import { Button } from "./Button";

function Content() {
  return (
    <>
      <div className="content-main-container">
        <div className="Main-main-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            destination="/module1"
          >
            1 Модуль
          </Button>
        </div>
        <ul class="list">
          <li>Графические элементы управления и индикации</li>
          <li>Типы данных</li>
          <li>Базовые функции</li>
          <li>Циклы типа While-Do и For-Loop</li>
          <li>Массивы данных</li>
          <li>Работа с файлами</li>
          <li>Практическая работа</li>
        </ul>
        <div className="Main-main-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            destination="/module2"
          >
            2 Модуль
          </Button>
        </div>
        <ul class="list">
          <li>Case-структуры</li>
          <li>Циклы типа For-Do</li>
          <li>Работа с "кнопками"</li>
          <li>Редактор формул</li>
          <li>Подпрограммы</li>
          <li>Практическая работа</li>
        </ul>
      </div>
    </>
  );
}

export default Content;
