import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };
  return {
    //props:
    count,

    //actions:
    increaseBy,
  };
};

export default useCounter;
