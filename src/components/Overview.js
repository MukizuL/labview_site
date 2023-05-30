import React from 'react';
import '../App.css';
import './Overview.css';


function Overview() {
  return (
    <>
    <div className='overview-white-stripe'>
        <h1>Содержание</h1>
    </div>

    <div className='overview-main-container'>
      <ul className='list-of-contents'>
        <li>Что такое LabView?</li>
        <li>Преимущества и недостатки</li>
        <li>Сферы применения</li>
        <li>Почему вам стоит использовать нашу платформу?</li>
        <li>Содержание курса</li>
        <li>Использованные источники</li>
      </ul>
    </div>
    </>
  );
}

export default Overview;