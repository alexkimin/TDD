import React from 'react';

import Title from './common/Title';

export interface IAppProps {
  //
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div >
      <Title title={'Testing'} name={'Alex'} />
    </div>
  );
}

export default App;
