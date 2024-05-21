import React from 'react';
import Paper from '../../assets/images/Paper.png'
import Rock from '../../assets/images/Rock.png'
import Scissors from '../../assets/images/Scissors.png'

type Resultado = {
  score: string,
  result: string | null,
  winner: string | null
}

const Resultado: React.FC<Resultado> = ({ score, result, winner }) => {
  return (
    <section className='flex flex-row w-full h-full gap-6 overflow-hidden bg-white shadow-lg rounded-xl'>
      <div className='flex flex-col w-full'>
        <p className='w-full p-2 text-2xl font-bold text-center font-sriracha bg-tertiary text-primary'>PONTUAÇÃO: {score}</p>

        <div className='flex items-center justify-center flex-1 h-auto overflow-hidden'>
          {result &&
            <img
              alt={result}
              src={result == 'Paper' ? Paper : result == 'Rock' ? Rock : Scissors}
              className='max-w-full  max-h-[40vh]'
            />}
        </div>
        <div className='flex items-center justify-center bg-tertiary min-h-12'>
          <p className='text-2xl font-bold font-sriracha text-primary'>{winner != null ? winner : null}</p>
        </div>
      </div>
    </section>
  );
};

export default Resultado;
