import React from 'react';

import { Route, Redirect, useLocation } from 'react-router-dom';

import GlobalStyle from './GlobalStyles';

import { useWindowSize } from '@react-hook/window-size';

//hooks
import useAuth from './hooks/useAuth';

// Components

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import YouTubePlayer from './components/YoutubePlayer/YoutubePlayer';
import MusicPage from './pages/MusicPage';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

const notLoggedInStyles = {
	gridTemplateAreas: "'header header' 'main main' 'footer footer'",
};

function App() {
	const { data: auth } = useAuth();
	const { pathname } = useLocation();
	const [windowWidth, windowHeight] = useWindowSize();

	return (
		<div style={auth && !auth.loggedIn ? notLoggedInStyles : {}} className='App'>
			<GlobalStyle />

			{pathname !== '/register' && pathname !== '/login' && <Header />}

			<Aside />

			<main>
				<Route exact path='/login' component={LoginPage}>
					{auth && auth.loggedIn && <Redirect to='/' />}
				</Route>

				<Route exact path='/' component={MusicPage} />
				<Route exact path='/register' component={RegisterPage} />
			</main>

			{pathname !== '/register' && pathname !== '/login' && <Footer />}

			<YouTubePlayer />
		</div>
	);
}

export default App;

// rfce för komponent
// semikolon & single quote
// minst en rad mellan kodblock
