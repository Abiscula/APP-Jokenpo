import React, { Fragment } from 'react'
import styled from 'styled-components'
import Scoreboard from './components/Scoreboard';
import Buttons from './components/Buttons';
import Rules from './components/Rules';

const Container  = styled.main`
  width: 56%;
  display: flex;
  flex-direction: column;
  margin: auto auto;
`
//Math.floor(Math.random() * 3);

function App() {
  return (
    <Fragment>
      <Container>
        <Scoreboard/>
        <Buttons/>
      </Container>
      <Rules/>
    </Fragment>
  );
}

export default App;
