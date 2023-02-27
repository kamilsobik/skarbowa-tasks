import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>Count up</button>
      <button onClick={() => setCount((count) => count - 1)}>Count down</button>
      <button onClick={() => setCount((count) => (count = 0))}>
        Reset count
      </button>
    </>
  );
};

export default Counter;
