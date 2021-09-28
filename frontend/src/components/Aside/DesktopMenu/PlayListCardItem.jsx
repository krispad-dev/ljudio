import React, { useContext } from 'react';
import { UiContext } from '../../../context/UiState';
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';




function PlayListCardItem({ title, playlistId }) {


	const { state, dispatch } = useContext(UiContext);

	function onClickHandler() {
		dispatch({ type: UI_STATE_ACTIONS.SET_CLOSE_MENU_MOBILE })
	}

	return (
		<PlayListCardItemWrapper onClick={onClickHandler}>
 			{playlistId === state.currentPlaylistId && <div className='marker'></div>}
			<Link to={`/playlist/${playlistId}`}>
				<p className='songTitle' style={{ fontSize: '1rem' }}>
					{title}
				</p>
			</Link>
		</PlayListCardItemWrapper>
	);
}

const PlayListCardItemWrapper = styled.li`
	.marker {
		width: 0.3rem;
		height: 100%;
		background-color: #1dd1a1;
		animation: markerEffect ease-in-out 0.2s;
			@keyframes markerEffect {
				from {
					width: 0rem;
				} 
				to {
					width: 0.3rem;
				}
			}
	}

	width: 100%;
	&:hover {
		opacity: 60%;
		transition: 0.2s ease-in-out;
	}

	height: 3rem;
	background-color: rgba(255, 255, 255, 0.08);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2px;
	margin: 0.1rem 0rem;

	.songTitle {
		font-size: 0.9rem;
		margin-left: 0.5rem;
	}

	a {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: #fff;
		cursor: pointer;
	}
	
`;

export default PlayListCardItem;
