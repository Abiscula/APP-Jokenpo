import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PageProvider } from './providers/p-pages';
import { PlayProvider } from './providers/p-plays';

ReactDOM.render(
  <React.StrictMode>
    
      <PageProvider>
          <PlayProvider>
          
            <App />
          
          </PlayProvider>
      </PageProvider>
      
  </React.StrictMode>,
  document.getElementById('root')
);