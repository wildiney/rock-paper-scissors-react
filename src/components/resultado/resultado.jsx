import React from 'react';

const resultado = (props) => {
  
  return (
    <section id='resultado'>
      <div className='wrapper'>
        <div className='score'>PONTUAÇÃO: {props.score}</div>
        <div className='result'>
          {props.result !== null ? (
            <img
              alt={props.result}
              src={`/apps/jokenpo/assets/images/${props.result}.png`}
            />
          ) : (
            ''
          )}
        </div>
        <div className='winner'>{props.winner}</div>
      </div>
    </section>
  );
};

export default resultado;
