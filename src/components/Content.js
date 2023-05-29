import React from 'react';
import '../App.css';
import './Content.css';

function Content() {
  return (
    <>
    <div className='contents-white-stripe'>
        <h1>Содержание</h1>
    </div>

    <div className='contents-main-container'>
        <p>Что такое LabView?</p>
        <p>Преимущества и недостатки</p>
        <p>Сферы применения</p>
        <p>Почему вам стоит использовать нашу платформу?</p>
        <p>Содержание курса</p>
        <p>Использованные источники</p>
    </div>
    </>
  );
}

export default Content;