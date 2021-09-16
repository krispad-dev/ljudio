import React, { useContext, useRef, useEffect } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import { useWindowSize } from '@react-hook/window-size';


function YouTubePlayer() {



	const playerRef = useRef();
	
	const [ { fullscreenVideoMode, currentSong, currentTime, isPlaying }, dispatch ] = useContext(playerControllerStateContext);
	const [ windowWidth, windowHeight ] = useWindowSize();

	console.log(isPlaying);


	const opts = {
		controls: 0,
		cc_load_policy: 0,
		playerVars: {
			autoplay: 1,
		},
	};


	function playVideo(event) {
		return playerRef.current.internalPlayer.playVideo();
	}

	function pauseVideo(event) {
		return playerRef.current.internalPlayer.pauseVideo();
	}

	function setVolume(volumeValue) {
		return playerRef.current.internalPlayer.setVolume(volumeValue);
	}

	function seekTo(seekToValue) {
		return playerRef.current.internalPlayer.seekTo(seekToValue);
	}

	function setSize(windowWidth) {
		return playerRef.current.internalPlayer.setSize(windowWidth);
	}


	useEffect(() => {

		setSize(windowWidth, windowHeight);
	
	}, [ windowWidth ]);


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
	}, [ currentTime ]);


	useEffect(() => {
		dispatch({ type: PLAYER_ACTIONS.PLAY_VIDEO, payload: playVideo });
		dispatch({ type: PLAYER_ACTIONS.PAUSE_VIDEO, payload: pauseVideo });
		dispatch({ type: PLAYER_ACTIONS.SET_VOLUME, payload: setVolume });
		dispatch({ type: PLAYER_ACTIONS.SEEK_TO, payload: seekTo });
	}, []);


	function onEndHandler() {
/* 		dispatch({ type: PLAYER_ACTIONS.SET_FULLSCREEN_VIDEO_MODE }); */
		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false });
		dispatch({ type: PLAYER_ACTIONS.SET_IS_PLAYING , playload: false })
	}


	function onPlayHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false })
		dispatch({ type: PLAYER_ACTIONS.SET_IS_PLAYING, payload: true })
	}


	function onPauseHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: true })
		dispatch({ type: PLAYER_ACTIONS.SET_IS_PLAYING, payload: false })
	}

/* 	console.log(playerRef.current.internalPlayer); */

	return (
		<IframeWrapper
			style={{ visibility: `${fullscreenVideoMode ? 'visible' : 'hidden'}` }}
			className={'ytPlayerContainer'}
		>
			;
			<YouTube
				containerClassName={'ytplayer'}
				opts={opts}
				ref={playerRef}
				onPause={onPauseHandler}
				onPlay={onPlayHandler}
				onEnd={onEndHandler}
				videoId={currentSong.videoId} 
			/>
			;
			<div className={'mask-top'}>
			</div>
		</IframeWrapper>
	);
}


export default YouTubePlayer;

const IframeWrapper = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;


	.mask-top {
		background-color: black;
		height: 5rem;
		position: absolute;
		bottom:0rem;
		width: 100%;
		display: flex;
		justify-content: center;
		letter-spacing: 6px;
	}

`;
