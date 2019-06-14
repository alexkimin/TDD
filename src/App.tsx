import React from 'react';

import Title from './common/Title';
import Counter from './class/Counter';
import HookCounter from './hook/HookCounter';

import { StoreProvider } from './store/store';

export interface IAppProps {
  //
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <StoreProvider>
      <div>
        <Title title={'Testing'} name={'Alex'} />
        <Counter />
        <HookCounter />
      </div>
    </StoreProvider>
  );
};

export default App;
