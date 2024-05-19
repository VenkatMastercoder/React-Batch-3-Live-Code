import { useContext, useEffect, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import UserContext from "../../context/UserContext";

const Banner = () => {
  // let count = 1;

  const UserData = useContext(UserContext);

  // State Variable
  let [count, setCount] = useState(1);
  let [test, setTest] = useState(1);
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(false);

  // --  Step : 2

  // useEffect(()=>{
  //   console.log("Use useEffect Executed")
  //   console.log(count)
  //   setCount(count)
  // },[count])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // API Call

    try {
      setLoading(true);
      // GET
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Step 1 : Render

  if (loading) {
    return <ShimmerThumbnail height={250} rounded />;
  } else {
    return (
      <>
        <p className="bg-black text-white">{UserData.name}</p>
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

        <button
          onClick={() => {
            console.log("++");
            //  count = count + 1;
            setTest(test + 1); // re - render the component
          }}>
          Counter + Test Variable
        </button>

        <pre>{JSON.stringify(data)}</pre>
        <p className="border border-red-500">tilte : {data.title}</p>
      </>
    );
  }
};

export default Banner;
