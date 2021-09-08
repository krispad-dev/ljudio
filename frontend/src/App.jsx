import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import MusicPage from './pages/MusicPage';

// Components
import SearchBar from './components/SearchBar';
import PlayerController from './components/YoutubePlayer/PlayerController';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import Logo from './components/Logo';

import './App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<header>
				<Logo />
					<div>
						<SearchBar />
{/* 						<Link to='/register'>REGISTER</Link> */}
					</div>
		
				</header>

				<aside></aside>

				<YouTubePlayer />

				<main>
					<Route exact path='/' component={MusicPage} />
					<Route exact path='/register' component={RegisterPage} />
				</main>

				<footer>
					<PlayerController />
				</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
