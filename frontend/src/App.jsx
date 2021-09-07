import React, { useState, useContext } from 'react';
import { UiContext } from './context/UiState';
import useGetSongs from './hooks/useGetSongs';

// Components
import SearchBar from './components/SearchBar';
import PlayerController from './components/YoutubePlayer/PlayerController';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import Logo from './components/Logo';

import './App.css';

function App() {

  const { state } = useContext(UiContext);

  console.log(state.searchString);

  const { data } = useGetSongs(state.searchString);

  console.log(data);



	return (
		<div className='App'>
			<header>
				<Logo />
        <SearchBar />
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
