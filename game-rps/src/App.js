import React, { Fragment } from 'react'
import { GlobalStyle } from './components/assets/general-styles';
import Main from './pages/Main';

//Math.floor(Math.random() * 3);

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
}

export default App;
