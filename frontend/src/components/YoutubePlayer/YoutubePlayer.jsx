import React, { useContext, useState, useRef, useEffect } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import YouTube from 'react-youtube';

import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';

function YouTubePlayer() {
	const [{ videoIsShowing, currentSong }, dispatch] = useContext(playerControllerStateContext);

	const playerRef = useRef();

	const opts = {
		height: '500',
		width: '300',
		controls: 0,
		cc_load_policy: 0,
		playerVars: {
			autoplay: 1,
		},
	};

	function playVideo(event) {
		playerRef.current.internalPlayer.playVideo();
	}

	function pauseVideo(event) {
		playerRef.current.internalPlayer.pauseVideo();
	}

	function setVolume(volumeValue) {
		playerRef.current.internalPlayer.setVolume(volumeValue);
	}

	function seekTo(seekToValue) {
		playerRef.current.internalPlayer.seekTo(seekToValue);
	}



	useEffect(() => {
		const interval = setInterval(async () => {
			const currentTime = await playerRef.current.internalPlayer.getCurrentTime();
			dispatch({ type: PLAYER_ACTIONS.SET_CURRENT_TIME, payload: currentTime });
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(async () => {
		const durationInMinutes = await playerRef.current.internalPlayer.getDuration();
		dispatch({ type: PLAYER_ACTIONS.SET_DURATION, payload: durationInMinutes });
	}, []);

	useEffect(() => {
		dispatch({ type: PLAYER_ACTIONS.PLAY_VIDEO, payload: playVideo });
		dispatch({ type: PLAYER_ACTIONS.PAUSE_VIDEO, payload: pauseVideo });
		dispatch({ type: PLAYER_ACTIONS.SET_VOLUME, payload: setVolume });
		dispatch({ type: PLAYER_ACTIONS.SEEK_TO, payload: seekTo });
	}, []);


	return (
		<div style={{ visibility: `${videoIsShowing ? 'visible' : 'hidden'}` }} className={'ytPlayerContainer'}>
			<YouTube
				containerClassName={'ytplayer'}
				opts={opts}
				ref={playerRef}
				onPause={() => dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: true })}
				onPlay={() => dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false })}
				style={{ borderRadius: '10px' }}
				videoId={'qOVmlTBX-t0'}
			/>
			;
		</div>
	);
}

export default YouTubePlayer;
