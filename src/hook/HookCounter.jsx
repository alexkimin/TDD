import React, { useState, useCallback } from "react";
import { useFetchData, testApiCall } from "./useFetchData";

export const url = "https://randomuser.me/api/";

const HookCounter = () => {
  const [number, setNumber] = useState(0);
  const [fetchName, setFetchName] = useState("Fetch");
  const [data, setData] = useState(undefined);

  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  const onFetch = () => {
    setData("Fetching...");
    setFetchName("Wait");
    testApiCall(url, setData, () => setFetchName("Fetch"));
  };

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>
        <b>Fetch on click</b>
      </div>
      <button onClick={onFetch}>{fetchName}</button>
      <div>{JSON.stringify(data)}</div>
      <div>
        <b>Fetch on mount</b>
      </div>
      <div>{JSON.stringify(useFetchData(url).data)}</div>
    </div>
  );
};

export default HookCounter;
