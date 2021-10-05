import React, { Fragment } from 'react'
import { GlobalStyle } from './components/assets/general-styles';
import Main from './pages/Main';
import Dispute from './pages/Dispute';
import { usePage } from './providers/p-pages';

function App() {

  const { page } = usePage()

  return (
    <Fragment>
      <GlobalStyle />
      {page 
        ? <Dispute />
        : <Main /> 
      }
    </Fragment>
  );
}

export default App;
