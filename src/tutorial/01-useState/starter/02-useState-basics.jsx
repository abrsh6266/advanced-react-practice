import { useState } from "react";

const UseStateBasics = () => {
  var [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={()=>setCount(count +1)}>Count</button>
    </>
  );
};

export default UseStateBasics;
