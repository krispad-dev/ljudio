import React, { useContext, useRef, useEffect } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import YouTube from 'react-youtube';
import styled from 'styled-components';

import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import { useWindowSize } from '@react-hook/window-size';

function YouTubePlayer() {
	const playerRef = useRef();

	const [{ fullscreenVideoMode, currentTime, cuePosition, activeCue, isPlaying, repeatIsOn }, dispatch] = useContext(
		playerControllerStateContext
	);

	const [windowWidth, windowHeight] = useWindowSize();

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
		return playerRef.current.internalPlayer.setSize(windowWidth, windowHeight - 200);
	}

	useEffect(() => {
		setSize(windowWidth);
	}, [windowWidth]);

	useEffect(() => {
		const interval = setInterval(async () => {
			if (isPlaying) {
				const currentTime = await playerRef.current.internalPlayer.getCurrentTime();
				dispatch({ type: PLAYER_ACTIONS.SET_CURRENT_TIME, payload: currentTime });
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [isPlaying]);

	useEffect(async () => {
		const durationInMinutes = await playerRef.current.internalPlayer.getDuration();
		dispatch({ type: PLAYER_ACTIONS.SET_DURATION, payload: durationInMinutes });
	}, [currentTime]);

	useEffect(() => {
		dispatch({ type: PLAYER_ACTIONS.PLAY_VIDEO, payload: playVideo });
		dispatch({ type: PLAYER_ACTIONS.PAUSE_VIDEO, payload: pauseVideo });
		dispatch({ type: PLAYER_ACTIONS.SET_VOLUME, payload: setVolume });
		dispatch({ type: PLAYER_ACTIONS.SEEK_TO, payload: seekTo });
	}, []);

	function onEndHandler() {
		if (!repeatIsOn) {
			const filteredPendingCue = [...activeCue].filter((item, i) => {
				return i !== cuePosition;
			});
			dispatch({
				type: PLAYER_ACTIONS.SET_ACTIVE_CUE,
				payload: filteredPendingCue,
			});
		}

		if ( repeatIsOn && cuePosition !== 0 ) {
			dispatch({ type: PLAYER_ACTIONS.SET_PREVIOUS_IN_CUE });
			dispatch({ type: PLAYER_ACTIONS.SET_NEXT_IN_CUE });
		} else if ( repeatIsOn && cuePosition === 0 ) {
			dispatch({ type: PLAYER_ACTIONS.SET_NEXT_IN_CUE });
			dispatch({ type: PLAYER_ACTIONS.SET_PREVIOUS_IN_CUE });
		}  else {
			dispatch({ type: PLAYER_ACTIONS.SET_PREVIOUS_IN_CUE });
			dispatch({ type: PLAYER_ACTIONS.SET_NEXT_IN_CUE });
		} 

		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false });
		dispatch({ type: PLAYER_ACTIONS.SET_IS_PLAYING, playload: false });
	}

	function onPlayHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: false });
		dispatch({ type: PLAYER_ACTIONS.SET_IS_PLAYING, payload: true });
	}

	function onPauseHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED, payload: true });
		dispatch({ type: PLAYER_ACTIONS.SET_IS_PLAYING, payload: false });
	}

	return (
		<IframeWrapper
			style={{ visibility: `${fullscreenVideoMode ? 'visible' : 'hidden'}` }}
			className={'ytPlayerContainer'}
		>
			;<div className={'mask-bottom'}></div>
			<YouTube
				containerClassName={'ytplayer'}
				opts={opts}
				ref={playerRef}
				onPause={onPauseHandler}
				onPlay={onPlayHandler}
				onEnd={onEndHandler}
				videoId={activeCue[cuePosition]}
			/>
			;<div className={'mask-top'}></div>
		</IframeWrapper>
	);
}

export default YouTubePlayer;

const IframeWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;

	.mask-top {
		background-color: black;
		height: 6rem;
		position: absolute;
		z-index: 888;
		bottom: 0rem;
		width: 100%;
		display: flex;
		justify-content: center;
		letter-spacing: 6px;
	}

	.mask-bottom {
		top: 0;
		background-color: black;
		height: 6rem;
		position: absolute;
		z-index: 888;
		width: 100%;
		display: flex;
		justify-content: center;
		letter-spacing: 6px;
	}
`;
