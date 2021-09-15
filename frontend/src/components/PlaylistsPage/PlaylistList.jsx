import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query'

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SongCardItem from './SongCardItem';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';

function PlaylistList() {

	const queryClient = useQueryClient()
	let { id } = useParams();

	const { data } = useGetOneSavedUserPlaylist(id);

	useEffect(() => {
		queryClient.fetchQuery(['playlist'])
	}, [id])


	return (
		<PlayListCaPlaylistListWrapper>
			<h3>{data && data.success && data.playlist && data.playlist.title}</h3>
			{data 
			&& data.success 
			&& data.playlist.songs 
			&& data.playlist.songs.length > 0 
			&& data.playlist.songs.map(song => <SongCardItem playlistId={data.playlist.playlistId} song={song} />)}
			{data && !data.success && <h2>No songs here - add some :)</h2>}
		</PlayListCaPlaylistListWrapper>
	)
}

const PlayListCaPlaylistListWrapper = styled.div`
	width: auto;
`;

export default PlaylistList;
