import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import React from 'react';
import { Provider } from 'react-redux';
import Store from './utils/Store.jsx';
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    
      <StrictMode>

        <Provider store={Store}>
           <App />
       

        </Provider>
       
      </StrictMode>
   
  );
} else {
  console.error('Root element not found');
}
