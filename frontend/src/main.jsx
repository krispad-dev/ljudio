import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; 
import UiState from './context/UiState';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <UiState>
      <App />
    </UiState>
  </QueryClientProvider>,
  document.getElementById('root')
);
