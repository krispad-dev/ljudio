import React from 'react';
import RegisterPage from './pages/RegisterPage';
import MusicPage from './pages/MusicPage';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { fetchFunction } from './hooks/useLogoutUser';

//hooks
import useAuth from './hooks/useAuth';

// Components
import Test from './components/Test';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchBar from './components/SearchBar';
import PlayerController from './components/YoutubePlayer/PlayerController';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import Logo from './components/Logo';

import './App.css';

function App() {

	const { data: auth } = useAuth();

	if (auth) {
		console.log(auth);
	}

	return (
		<div className='App'>
			<BrowserRouter>
      
				<header>
					<Logo />
					<SearchBar />
					{auth && !auth.loggedIn && <Link to='/register'>REGISTER</Link>}
					{auth && !auth.loggedIn && <Link to='/login'>Login</Link>}
				</header>

				<YouTubePlayer />

				<aside></aside>

				<main>
					<Route exact path='/' component={MusicPage} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/login' component={LoginPage}>
						{auth && auth.loggedIn && <Redirect to='/test' />}
					</Route>
					<Route exact path='/test' component={Test}>
						{auth && !auth.loggedIn && <Redirect to='/login' />}
					</Route>
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
