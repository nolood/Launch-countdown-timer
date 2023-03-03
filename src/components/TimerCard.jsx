import React, { useEffect, useState } from 'react';

const TimerCard = ({title, name}) => {

  const [next, setNext] = useState(false);

  // eslint-disable-next-line
  useEffect(() => {
    setNext(!next)
  // eslint-disable-next-line
  }, [title])

  return (
    <div className='card__wrapper'>
      <div className='card'>
        <div className={next ? 'front' : 'back'}>
          <div className='card__flipper'>
            <div className='circle'></div>
            <div className='card__flipper-border'></div>
            <div className='circle-right'></div>
          </div>
          <span className='card__title'>{title}</span>
        </div>
        <div className={next ? 'back' : 'front'}>
          <div className='card__flipper'>
            <div className='circle'></div>
            <div className='card__flipper-border'></div>
            <div className='circle-right'></div>
          </div>
          <span className='card__title'>{title}</span>
        </div>
      </div>
      <span className='card__name'>{name}</span>
    </div>
  );
};

export default TimerCard;