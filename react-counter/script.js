import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <p>
      <span>現在の値: {count}</span>
      <button onClick={increment}>増やす</button>
      <button onClick={decrement}>減らす</button>
    </p>
  );
}

export default Counter;