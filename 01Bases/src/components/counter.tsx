import useCounter from "../hooks/useCounter";

const Counter = () => {
  const { count, increaseBy } = useCounter();

  return (
    <div>
      <p className="text-2xl">
        Contador: <span className="text-blue-500">{count}</span>
      </p>
      <div>
        <button
          onClick={() => increaseBy(-1)}
          className=" bg-blue-500 hover:bg-blue-700 mx-2 px-2 py-1 rounded-xl"
        >
          -1
        </button>
        <button
          onClick={() => increaseBy(+1)}
          className=" bg-blue-500 hover:bg-blue-700 mx-2 px-2 py-1 rounded-xl"
        >
          +1
        </button>
      </div>
    </div>
  );
};

export default Counter;
