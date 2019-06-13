import React, { useState, useCallback } from 'react';
import { useFetchData } from './useFetchData';

export const url = 'https://randomuser.me/api/';

const HookCounter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  const { data, fetcher, isPending } = useFetchData(url, {
    onMount: true
  });

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>
        <b>Fetch on click</b>
      </div>
      <button onClick={fetcher} data-testid={'fetchButton'}>
        {isPending ? 'Wait...' : 'Fetch!'}
      </button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default HookCounter;
