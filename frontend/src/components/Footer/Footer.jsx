import React from 'react';
import PlayerController from '../YoutubePlayer/PlayerController';
import CurrentSongDisplayer from './CurrentSongSideScroller';


function Footer() {
	return (
		<footer>
			<CurrentSongDisplayer />
			<PlayerController />
		</footer>
	);
}

export default Footer;
