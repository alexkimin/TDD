import { createAction } from 'redux-act';


const testAction = createAction<any>('TEST_ACTION');

const reducer = {
  [testAction.toString()]: (state: any, payload: any) => {
    return { ...state, greeting: payload };
  }
};

export default {
  reducer,
  action: {
    testAction
  },
  initState: {}
};
