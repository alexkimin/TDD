import React from 'react';

import Title from './common/Title';
import Counter from './class/Counter';
import HookCounter from './hook/HookCounter';

export interface IAppProps {
  //
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div >
      <Title title={'Testing'} name={'Alex'} />
      <Counter />
      <HookCounter />
    </div>
  );
}

export default App;
