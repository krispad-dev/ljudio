import React from 'react';
import ReactDOM from 'react-dom';
import { PlayerControllerStateProvider } from './context/YouTubePlayerContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import UiState from './context/UiState';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<PlayerControllerStateProvider>
			<UiState>
				<App />
			</UiState>
		</PlayerControllerStateProvider>
	</QueryClientProvider>,
	document.getElementById('root')
);
