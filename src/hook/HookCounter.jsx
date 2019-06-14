import React, { useState, useCallback } from 'react';
import { useFetchData } from './useFetchData';

import { useStoreService } from '../store/store';
import testModule from '../store/duck';

const { action } = testModule;

export const url = 'https://randomuser.me/api/';

const FetchPart = ({ fetcher, isPending, data }) => (
  <div>
    <div>
      <b>Fetch on click</b>
    </div>
    <button onClick={fetcher} data-testid={'fetchButton'}>
      {isPending ? 'Wait...' : 'Fetch!'}
    </button>
    <div>{JSON.stringify(data)}</div>
  </div>
);

const HookCounter = () => {
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useStoreService();

  const onIncrease = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  const onDecrease = useCallback(() => {
    setNumber(number - 1);
  }, [number]);

  const onDispatch = () => dispatch(action.testAction('hello'));

  const { data, fetcher, isPending } = useFetchData(url, {
    onMount: false
  });

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <div>
        <div>{state.greeting}</div>
        <button onClick={onDispatch}>dispatch</button>
      </div>
      <FetchPart fetcher={fetcher} isPending={isPending} data={data} />
    </div>
  );
};

export default HookCounter;
