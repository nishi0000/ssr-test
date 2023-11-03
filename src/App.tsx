import React, { useEffect, useState } from "react";

export const App = () => {
  const [clientMessage, setClientMessage] = useState<string>("SetMessage");
  const [count, setCount] = useState<number>(0);

  const test:string = "test"


  return (
    <>
      <h1>{clientMessage}</h1>
      <h1>{test}</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(()=>count+1)}>+Click</button>
    </>
  );
};