import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const rem = (id)=>{
    const p = people.filter(p=> p.id != id)
    setPeople(p)
  }
  return (
    <>
      <h2>useState array example</h2>
      {
        people.map((p)=>{
          return (
            <div className="item" key={p.id}>
              <h4>{p.name} </h4>
              <button className="btn" onClick={()=>rem(p.id)}>Remove</button>
            </div>
          )
        })
      }
      <button className="btn" onClick={()=>{
        setPeople([])
      }}>clear All</button>
    </>
  );
};

export default UseStateArray;
