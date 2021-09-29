import React, { useContext } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import { MdPlayCircleOutline, MdPause } from 'react-icons/md';
import { CgScreen } from 'react-icons/cg';
import { MdSkipNext } from 'react-icons/md';
import ShuffleBtn from '../../components/YoutubePlayer/ShuffleBtn';
import RepeatBtn from './RepeatBtn';

import VolumeSlider from './VolumeSlider';
import ProgressSlider from './ProgressSlider';
import styled from 'styled-components';

function Controller() {
	const [{ playVideo, pauseVideo, durationInMinutes, playerIsPaused }, dispatch] = useContext(
		playerControllerStateContext
	);

	function setNextInCueHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_NEXT_IN_CUE });
	}

	function setPreviousInCueHandler() {
		dispatch({ type: PLAYER_ACTIONS.SET_PREVIOUS_IN_CUE });
	}

	return (
		<PlayerControllerWrapper>
			<div className={'volumeContainer'}>
				<VolumeSlider />
			</div>

			<div className={'buttonsContainer'}>
				<MdSkipNext
					className={'next-prevBtn'}
					style={{ color: '#fff', fontSize: '3rem', transform: 'rotate(-180deg)' }}
					onClick={setPreviousInCueHandler}
				/>
				{playerIsPaused ? (
					<MdPlayCircleOutline
						onClick={() => playVideo()}
						style={{ color: '#fff' }}
						className={'playPauseBtn'}
					/>
				) : (
					<MdPause onClick={() => pauseVideo()} className={'playPauseBtn'} style={{ color: '#1dd1a1' }} />
				)}
				<MdSkipNext
					onClick={setNextInCueHandler}
					className={'next-prevBtn'}
					style={{ color: '#fff', fontSize: '3rem' }}
				/>

				<CgScreen
					onClick={() => dispatch({ type: PLAYER_ACTIONS.SET_FULLSCREEN_VIDEO_MODE })}
					className={'showVideo'}
					style={{ color: '#fff', fontSize: '1rem', margin: '1rem', cursor: 'pointer' }}
				/>
				<RepeatBtn />
				<ShuffleBtn />
			</div>

			<div>
				<ProgressSlider durationInMinutes={durationInMinutes} className={'progressContainer'} />
			</div>
		</PlayerControllerWrapper>
	);
}

export default Controller;

const PlayerControllerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 0.5rem;
	border-radius: 50px;

	@media (max-width: 1000px) {
		flex-direction: column;
	}

	.optionsContainer {
		color: #fff;
		font-size: 1rem;

		.showVideo {
			cursor: pointer;
			&:hover {
				color: blueviolet;
			}
		}
	}

	.buttonsContainer {

		display: flex;
		justify-content: center;
		align-items: center;
		.next-prevBtn {
			&:hover {
				opacity: 80%;
				transition: 0.2s ease-in-out;
				color: #fff;
				cursor: pointer;
				border-radius: 5px;
			}
		}

		.playPauseBtn {
			transition: ease-in-out 1s;
			font-size: 4rem;
			color: #fff;
			&:hover {
				opacity: 80%;
				transition: 0.2s ease-in-out;
				color: #fff;
				cursor: pointer;
				background-color: rgba(255, 255, 255, 0.1);
				border-radius: 5px;
			}
		}
	}
`;
