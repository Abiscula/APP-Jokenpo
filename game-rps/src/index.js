import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PlayProvider } from './providers/p-plays';
import { RulesProvider } from './providers/p-rules';

ReactDOM.render(
  <React.StrictMode>
    <RulesProvider>
      <PlayProvider>
        <App />
      </PlayProvider>
    </RulesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);