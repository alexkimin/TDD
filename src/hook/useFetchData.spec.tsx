import React from 'react';
// import { render, waitForElement } from '@testing-library/react';
import { renderHook, act } from 'react-hooks-testing-library';
import { useFetchData } from './useFetchData';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// if the custom hook is libs
describe('useFetchData', () => {
  test('should fetch with url', async () => {
    const url = '/test';
    const res = { data: 'test' };
    mock.onGet(url).reply(200, res);
    const { result, waitForNextUpdate } = renderHook(() => useFetchData(url));

    act(() => result.current.fetcher());

    await waitForNextUpdate();
    expect(result.current.data).toEqual(res);

    act(() => result.current.setData('hello'));
    expect(result.current.data).toEqual('hello');
  });
});
