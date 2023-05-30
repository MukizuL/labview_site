import React from 'react';
import '../../App.css';
import Overviewblock from '../Overview';
import ProgressBar from '../ProgressBar';

function Overview() {
  return (
    <>
        <ProgressBar />
        <Overviewblock />
    </>
  );
}

export default Overview;