import React, { useEffect, useContext } from 'react';

import { playerControllerStateContext } from '../../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer';

import { useQueryClient } from 'react-query';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SongCardItem from './SongCardItem';
import PlaylistTitleHeader from './PlaylistTitleHeader';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';

function PlaylistList() {
	const [playerState, dispatch] = useContext(playerControllerStateContext);

	const queryClient = useQueryClient();
	let { id } = useParams();
	const { data, isSuccess } = useGetOneSavedUserPlaylist(id);

	const pendingCue = data && data.playlist && data.playlist.songs && data.playlist.songs;

	useEffect(() => {

			queryClient.fetchQuery(['playlist']);


	}, [id, isSuccess]);

	useEffect(() => {
		dispatch({ type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: pendingCue });
	}, [data]);

	return (
		<>
			<PlaylistTitleHeader isSuccess={isSuccess} playlist={data && data.success && data.playlist} />
			<PlayListCaPlaylistListWrapper>
				{data &&
					data.success &&
					data.playlist.songs &&
					data.playlist.songs.length > 0 &&
					data.playlist.songs.map((song, i) => (
						<SongCardItem index={i} key={i} song={song} />
					))}
				{data && !data.success && <h2>No songs here - add some :)</h2>}
			</PlayListCaPlaylistListWrapper>
		</>
	);
}

const PlayListCaPlaylistListWrapper = styled.div`
	width: auto;
	height: 50vh;
	overflow-y: scroll;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	::-webkit-scrollbar {
	display: none;
}
`;

export default PlaylistList;
