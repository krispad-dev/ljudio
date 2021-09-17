import React, { useContext } from 'react';
import { UiContext } from '../../../context/UiState'
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RemoveUserPlaylist from '../../RemoveUserPlaylist';
import useGetFollowedPlaylists from '../../../hooks/useGetFollowedPlaylists';
import { isInPlaylist } from '../../../helpers/helpers';

function PlayListCardItem({ title, playlistId, id }) {
	const { data } = useGetFollowedPlaylists();
	const { state, dispatch } = useContext(UiContext)

	return (
		<PlayListCardItemWrapper onClick={()=> dispatch({type: UI_STATE_ACTIONS.SET_CLOSE_MENU_MOBILE})}>
			<Link to={`/playlist/${playlistId ? playlistId : id}`}>
				<p className='songTitle'>{title}</p>
			</Link>
			<div>
				{data && !isInPlaylist(playlistId, data.followedPlaylists) && <RemoveUserPlaylist playlistId={id} />}
			</div>
		</PlayListCardItemWrapper>
	);
}

const PlayListCardItemWrapper = styled.li`
	width: 2rem;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
	}
	width: 100%;
	&:hover {
		opacity: 60%;
		transition: 0.2s ease-in-out;
	}

	height: 3rem;
	background-color: #212121;
	border: 3px solid black;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;

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
