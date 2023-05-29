import React from 'react';
import '../../App.css';
import Main from '../Main';
import Overview from '../Overview'
import ProgressBar from '../ProgressBar';


function Home() {
  return (
    <>
      <ProgressBar />
      <Main />
      <Overview />
    </>
  );
}

export default Home;