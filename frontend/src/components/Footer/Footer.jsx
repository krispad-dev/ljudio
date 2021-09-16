import React from 'react';
import PlayerController from '../YoutubePlayer/PlayerController';
import CurrentSongDisplayer from './CurrentSongSideScroller';
import useAuth from '../../hooks/useAuth';


function Footer() {

	const { data: auth } = useAuth()

	return (
		<footer>
			{auth && auth.loggedIn && <CurrentSongDisplayer />}
			<PlayerController />
		</footer>
	);
}

export default Footer;
