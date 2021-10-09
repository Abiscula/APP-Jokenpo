import React from 'react'
import { GlobalStyle } from './components/assets/general-styles';
import Main from './pages/Main';
import Dispute from './pages/Dispute';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        
        <Route path="/dispute">
          <Dispute />
        </Route>

        <Route exact path="/">
          <Main /> 
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
