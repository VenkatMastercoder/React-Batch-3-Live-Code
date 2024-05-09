import { useState } from "react";

const Comments = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Object
  const [data, setData] = useState({
    name: "",
    message: "",
  });

  // Array
  const [comments, setComments] = useState([]);

  return (
    <>
      <h1>Comments Page</h1>

      <input
        onChange={(e) => {
          console.log("Name:", e.target.value);
          setName(e.target.value);
        }}
        className="border border-red-500"
        placeholder="Enter Name"
      />
      <input
        onChange={(e) => {
          console.log("Message:", e.target.value);
          setMessage(e.target.value);
        }}
        className="border border-red-500"
        placeholder="Enter Message"
      />

      <button
        onClick={() => {
          // (e) => [...e, { name: name, message: message }]
          // setData({ name: name, message: message });
          // setComments([{ name: name, message: message }])
          setComments((e)=>[...e,{ name: name, message: message }])
        }}>
        Submit
      </button>
      <pre>{JSON.stringify(comments)}</pre>
      <pre>{JSON.stringify(data)}</pre>
      <p>Name :{data.name}</p>
      <p>Message :{data.message}</p>
    </>
  );
};

export default Comments;
