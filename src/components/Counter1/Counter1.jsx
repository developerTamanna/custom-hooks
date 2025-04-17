import React, { useState } from 'react';

const Counter1 = () => {

    const [counter, setCounter] = useState(0)

//increment function

const increment = ()=>{
    setCounter(counter+1)
}

//decrement function

const decrement = ()=>{
    setCounter(counter-1)
}


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
         onClick={()=>setCounter(0)}
         className='btn ml-16'>dismes</button>
         
        </div>
    );
};

export default Counter1;