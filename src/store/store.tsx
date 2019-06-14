import React, { createContext, useReducer, useContext } from 'react';
import { createReducer } from 'redux-act';
import testModule from './duck';
import { compose } from './util';

const initState = {
  ...testModule.initState
};
const rootReducer = createReducer({ ...testModule.reducer }, initState);

const testMiddleware1 = ({ dispatch, state }: any) => (next: any) => (
  action: any
) => {
  console.log('testMiddleware1', action);
  next(action);
};
const testMiddleware2 = ({ dispatch, state }: any) => (next: any) => (
  action: any
) => {
  console.log('testMiddleware2', action);
  next(action);
};

const applyMiddleware = (middlewares: any[], { dispatch, state }: any) => (
  action: any
) => {
  const pa = middlewares.map((fn: any) => fn({ dispatch, state }));
  return compose(...pa)(dispatch)(action);
};

export const StoreContext = createContext({});

export const StoreProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(rootReducer, initState);
  const enhancedDispatch = applyMiddleware([testMiddleware1, testMiddleware2], {
    dispatch,
    state
  });

  return (
    <StoreContext.Provider value={[state, enhancedDispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreService = () => useContext(StoreContext);
