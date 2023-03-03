import React, { useEffect, useState } from 'react';
import TimerCard from './TimerCard';

const Timer = () => {
  const [days, setDays] = useState('09');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  const startTime = Date.now();
  const distance = days * 24 * 60 * 60 * 1000;

  function start() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const remainingTime = Math.max(distance - elapsedTime, 0);

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000).toString().padStart(2, '0');

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    if (remainingTime <= 0) {
      setDays('09');
      setHours('00');
      setMinutes('00');
      setSeconds('00');
    }
  }

  // eslint-disable-next-line
  useEffect(() => {
    const intervalId = setInterval(start, 1000);
  
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className='timer'>
      <TimerCard title={days} name={'days'}/>
      <TimerCard title={hours} name={'hours'}/>
      <TimerCard title={minutes} name={'minutes'}/>
      <TimerCard title={seconds} name={'seconds'}/>
    </div>
  );
};

export default Timer;