import React from 'react';
import Timer from './components/Timer'
import hills from './assets/pattern-hills.svg';

const App = () => {
  return (
    <div className='App'>
      <span className='app__title'>We're launching soon</span>
      <Timer/>
      <img className='hills' src={hills} alt=''/>
    </div>
  );
};

export default App;