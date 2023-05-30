import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Main.css';


function Main() {
  return (
    <div className='Main-main-container'>
      <h1>LabView</h1>
      <p>Образовательная платформа</p>
      <div className='Main-main-btns'>
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          НАЧАТЬ
        </Button>
      </div>
    </div>
  );
}

export default Main;