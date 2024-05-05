import { useState } from "react";

const Banner = () => {
  // let count = 1;

  // State Variable
  let [count, setCount] = useState(1);
  return (
    <>
      <button
        className="h-11 bg-blue-500 px-5 text-white"
        onClick={() => {
          console.log("button Clicked");
        }}>
        Todays Offer
      </button>

      <p className="bg-slate-400 p-5"> {count}</p>

      <button
        onClick={() => {
          console.log("++");
        //  count = count + 1;
          setCount(count + 1);
          console.log(count);
        }}>
        Counter +
      </button>
      <button
        onClick={() => {
          console.log("++");
          count = count - 1;
          console.log(count);
        }}>
        Counter -
      </button>
    </>
  );
};

export default Banner;
