import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import FlexWrapper from './FlexWrapper/FlexWrapper';

const App = () => (
  <>
    <Header />
    <FlexWrapper>
      <Sidebar />
      <Main />
    </FlexWrapper>
  </>
);

export default App;
