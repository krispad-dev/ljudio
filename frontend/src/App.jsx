import React, { useState } from 'react';
import PlayerController from './components/YoutubePlayer/PlayerController';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import Logo from './components/Logo';

import './App.css';

function App() {
	return (
		<div className='App'>
			<header>
				<Logo />
			</header>

			<aside></aside>

			<main>
				<YouTubePlayer />
			</main>

			<footer>
				<PlayerController />
			</footer>
		</div>
	);
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
