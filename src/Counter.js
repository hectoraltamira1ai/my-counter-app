import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [storedCount, setStoredCount] = useState(null);
    const [result, setResult] = useState(null);

    const playSound = () => {
        const audio = new Audio('click-sound.mp3');
        audio.play();
    };

    const handleIncrement = () => {
        setCount (count + 1);
        playSound();
    };

    const handleDecrement = () => {
        setCount (count - 1);
        playSound();
    };

    const handleReset = () => {
        setCount (0);
        playSound();
    };

    const handleStoreCount = () => {
        setStoredCount(count);
        playSound();
    };

    const handleStoreResult = () => {
        setResult(count);
        playSound();
    };

    const handleRecallStoredNumber = () => {
        if (storedCount !== null) {
            setCount(storedCount);
            playSound();
        }
    };
        // useEffect to log the count whenever it changes
        useEffect(() => {
            console.log(`Current count: ${count}`);
        }, [count]); // Dependency array includes count

return (
    <div>
            <h1>Counter: {count}</h1>
            <button className="gradient-button" onClick={handleIncrement}>Increment</button>
            <button className="gradient-button" onClick={handleDecrement}>Decrement</button>
            <button className="gradient-button" onClick={handleReset}>Reset</button>
            <button className="gradient-button" onClick={handleStoreCount}>Store Count</button>
            <button className="gradient-button" onClick={handleStoreResult}>Store Result</button>
            <button className="gradient-button" onClick={handleRecallStoredNumber}>Recall Stored Number</button>
            {storedCount !== null && <p>Stored Count: {storedCount}</p>}
            {result !== null && <p>Stored Result: {result}</p>}
        </div>
    );
};

export default Counter;