import React, { useState } from 'react';

const useCounter = (initialValue =0) => {

    
    const [counter, setCounter] = useState(initialValue)

//increment function

   const increment = ()=>{
    setCounter(counter+1)
    }

    const dismes = ()=>{
        setCounter(0)
    }

//decrement function

const decrement = ()=>{
    setCounter(counter-1)
}
    return [counter, increment, decrement,dismes];
};

export default useCounter;