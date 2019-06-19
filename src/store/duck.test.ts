import duck from './duck';

describe('duck', () => {
  let state: any;

  beforeEach(() => {
    state = duck.initState;
  });

  test('should work as expected', () => {
    const mockPayload = 'hello';
    const reducer = duck.reducer[duck.action.testAction.toString()];
    expect(reducer(state, mockPayload)).toEqual({ greeting: mockPayload });
  });
});
