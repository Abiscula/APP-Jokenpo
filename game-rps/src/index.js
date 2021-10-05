import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageProvider } from './providers/p-pages';
import { PlayProvider } from './providers/p-plays';
import { RulesProvider } from './providers/p-rules';

ReactDOM.render(
  <React.StrictMode>

    <PageProvider>
      <RulesProvider>
        <PlayProvider>
          
          <App />

        </PlayProvider>
      </RulesProvider>
    </PageProvider>

  </React.StrictMode>,
  document.getElementById('root')
);