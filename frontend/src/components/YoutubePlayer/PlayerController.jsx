import React, { useContext } from 'react';
import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';
import { MdPlayCircleOutline, MdPause } from 'react-icons/md';
import { CgScreen } from 'react-icons/cg';

import VolumeSlider from './VolumeSlider';
import ProgressSlider from './ProgressSlider';
import styled from 'styled-components';

function Controller() {
	const [{ playVideo, pauseVideo, setVolume, durationInMinutes, playerIsPaused }, dispatch] = useContext(
		playerControllerStateContext
	);

	return (
		<PlayerControllerWrapper>
			<div className={'optionsContainer'}>
				<CgScreen onClick={() => dispatch({type: PLAYER_ACTIONS.SET_SHOW_VIDEO })} className={'showVideo'} />
			</div>

			<div className={'volumeContainer'}>
				<VolumeSlider />
			</div>

			<div className={'buttonsContainer'}>
				{playerIsPaused ? (
					<MdPlayCircleOutline onClick={() => playVideo()} className={'playPauseBtn'} />
				) : (
					<MdPause onClick={() => pauseVideo()} className={'playPauseBtn'} />
				)}
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
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	padding: 0.5rem;
	border-radius: 50px;
	margin-bottom: 4rem;

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
		color: #fff;

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
