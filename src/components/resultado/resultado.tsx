import React from 'react';

type Resultado = {
  score: string,
  result: string | null,
  winner: string | null
}

const Resultado: React.FC<Resultado> = ({ score, result, winner }) => {

  return (
    <section className='w-full h-full flex gap-6 flex-row bg-white rounded-xl overflow-hidden shadow-lg'>
      <div className='flex flex-col w-full'>
        <p className='font-sriracha bg-tertiary w-full text-2xl text-primary font-bold text-center p-2'>PONTUAÇÃO: {score}</p>

        <div className='flex flex-1 justify-center items-center h-auto overflow-hidden'>
          {result &&
            <img
              alt={result}
              src={`/assets/images/${result}.png`}
              className='max-w-full  max-h-[40vh]'
            />}
        </div>
        <div className='bg-tertiary min-h-12 flex justify-center items-center'>
          <p className='font-sriracha text-primary font-bold text-2xl'>{winner != null ? winner : null}</p>
        </div>
      </div>
    </section>
  );
};

export default Resultado;
