import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  const handleClick = () => {
    setCount(count + 1);
    setTime(new Date());
  };

  return (
    <>
      <div>
        <h1>Click Counter</h1>
        <h2>{count}</h2>
        <button onClick={handleClick}>Click me!</button>
      </div>
      <div>
        <h1>Last click</h1>
        <h2>Date</h2>
        <h2>{time.toLocaleDateString()}</h2>
        <h2>Time</h2>
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    </>
  );
};

export default ClickCounter;
