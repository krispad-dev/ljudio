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

	const queryClient = useQueryClient();
	let { id } = useParams();
	const { data } = useGetOneSavedUserPlaylist(id);

  const pendingCue = data && data.playlist && data.playlist.songs && data.playlist.songs


	const [ playerState, dispatch ] = useContext(playerControllerStateContext);

	useEffect(() => {
		queryClient.fetchQuery(['playlist']);
	}, [id]);

	useEffect(() => {
    dispatch({type: PLAYER_ACTIONS.SET_PENDING_CUE, payload: pendingCue })
  }, [data]);

	return (
		<PlayListCaPlaylistListWrapper>
			<PlaylistTitleHeader
				title={data && data.success && data.playlist && data.playlist.title}
				playlistId={data && data.success && data.playlist && data.playlist.playlistId}
				playlist={data && data.success && data.playlist}
			/>
			{data &&
				data.success &&
				data.playlist.songs &&
				data.playlist.songs.length > 0 &&
				data.playlist.songs.map((song, i) => (
					<SongCardItem index={i} key={i} playlistId={data.playlist.playlistId} song={song} />
				))}
			{data && !data.success && <h2>No songs here - add some :)</h2>}
		</PlayListCaPlaylistListWrapper>
	);
}

const PlayListCaPlaylistListWrapper = styled.div`
	width: auto;
`;

export default PlaylistList;
