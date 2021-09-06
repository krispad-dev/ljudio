import React from 'react';
import ReactDOM from 'react-dom';
import { PlayerControllerStateProvider } from './context/YouTubePlayerContext'
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<PlayerControllerStateProvider>
			<App />
		</PlayerControllerStateProvider>
	</QueryClientProvider>,
	document.getElementById('root')
);
