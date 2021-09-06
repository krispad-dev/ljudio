import React, { useState } from 'react';
import { Button } from '@material-ui/core'
import PlayerController from './components/YoutubePlayer/PlayerController'
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import TestPage from './pages/TestPage';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'

import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
			<header>
				<h1>LJUDIO</h1>
				<Link to={'/music'}>Music Page</Link>
				<Link to={'/'}>Home  </Link>
			</header>

			<aside></aside>

			<main>
				<Route path={'/music'} exact component={TestPage} />
				<YouTubePlayer/>
			</main>

			<footer>
				<PlayerController />
			</footer>
			</Router>
		</div>
	);
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
