import { useState } from "react";

const Offer = () => {

  // const name = " "
  // State Variable
  const [count, SetCount] = useState(2);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          SetCount(count + 1);
        }}>
        Chanage
      </button>
    </>
  );
};

export default Offer;
