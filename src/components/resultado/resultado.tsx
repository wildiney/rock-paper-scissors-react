import React from 'react';

const Resultado: React.FC<{
  score: string,
  result: string,
  winner: string
}> = ({ score, result, winner }) => {

  return (
    <section id='resultado'>
      <div className='wrapper'>
        <div className='score'>PONTUAÇÃO: {score}</div>
        <div className='result'>
          {result !== null ? (
            <img
              alt={result}
              src={`/assets/images/${result}.png`}
            />
          ) : (
            ''
          )}
        </div>
        <div className='winner'>{winner}</div>
      </div>
    </section>
  );
};

export default Resultado;
