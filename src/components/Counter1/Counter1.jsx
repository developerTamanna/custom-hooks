import React, { useState } from 'react';

const Counter1 = () => {

    const [counter, setCounter] = useState(0)
    return (
        <div >
            <h1 className='ml-24 text-3xl font-semibold'>{counter}</h1>
         <div className='flex gap-4 mt-10'>
         <button
          onClick={()=>setCounter(counter+1)} className='btn'>increment</button>
         <button onClick={()=>setCounter(counter-1)} className='btn'>decrement</button>
          </div>
          <br></br>
         
         <button
         onClick={()=>setCounter(0)}
         className='btn ml-16'>dismes</button>
         
        </div>
    );
};

export default Counter1;