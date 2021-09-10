import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { PlayerControllerStateProvider } from './context/YouTubePlayerContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import UiState from './context/UiState';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<PlayerControllerStateProvider>
				<UiState>
					<App />
				</UiState>
			</PlayerControllerStateProvider>
{/* 			<ReactQueryDevtools /> */}
		</BrowserRouter>
	</QueryClientProvider>,
	document.getElementById('root')
);
