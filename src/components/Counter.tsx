import React, { useState } from 'react';
import classes from './Counter.module.scss';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className={classes.Container}>
            <h1>Counter App</h1>
            <p className={classes.Value}>Current Count: {count}</p>
            <div className={classes.Buttons}>
                <button className={classes.Button} onClick={increment}>
                    Increment
                </button>
                <button className={classes.Button} onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
