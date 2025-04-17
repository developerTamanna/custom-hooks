import React from 'react';
import useCounter from '../../Hooks/useCounter';

const Counter1 = () => {

const [counter, increment, decrement, dismes]=  useCounter(10)

    return (
        <div >
            <h1 className='ml-24 text-3xl font-semibold'>{counter}</h1>
         <div className='flex gap-4 mt-10'>
         <button onClick={increment}
           className='btn'>increment</button>
         <button onClick={decrement} className='btn'>decrement</button>
          </div>
          <br></br>
         
         <button
         onClick={dismes}
         className='btn ml-16'>dismes</button>
         
        </div>
    );
};

export default Counter1;