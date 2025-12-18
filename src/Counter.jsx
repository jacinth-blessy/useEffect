import React, { useEffect } from 'react';
import { useState } from 'react';

function Counter()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count%3==0 && count!==0){
            alert(`The current number ${count} is divisible by 3!`);
        }
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;