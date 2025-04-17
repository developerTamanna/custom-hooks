import React from 'react';
import useCounter from '../../Hooks/useCounter';

const Counter2 = () => {

    const [counter,increment, decrement, dismes ]=useCounter(5)
    return (
        <div className='border mt-10 p-4  '>
            <h1 className='ml-24 text-3xl font-semibold'>{counter}</h1>
            <div className='flex gap-4'>
           <button onClick={increment} className='btn'>increase</button>
           <button onClick={decrement} className='btn'>decrease</button>
        </div>
        <button
         onClick={dismes}
         className='btn ml-16 mt-5'>dismes</button>
        </div>
    );
};

export default Counter2;