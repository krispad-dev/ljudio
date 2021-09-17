import React from 'react';

import styled from 'styled-components';

import AllPlaylistsListItemCard from './AllPlaylistsListItemCard';
import useGetAllPlaylists from '../../hooks/useGetAllPlaylists';

function AllPlaylistsList() {
	const { data: allPlaylists } = useGetAllPlaylists();

	return (
		<AllPlaylistsListWrapper>
			{allPlaylists &&
				allPlaylists.playlists &&
				allPlaylists.playlists.map(playlist => (
					<AllPlaylistsListItemCard key={playlist.playlistId} {...playlist} />
				))}
		</AllPlaylistsListWrapper>
	);
}

export default AllPlaylistsList;

const AllPlaylistsListWrapper = styled.div`
	::-webkit-scrollbar {
		display: none;
	}
	overflow-y: scroll;
	width: 100%;
	display: grid;
	gap: 0.3rem;
	grid-template-columns: 15vw 15vw 15vw 15vw;

	@media only screen and (max-width: 1000px) {
		grid-template-columns: 33vw auto 33vw;

	}
	@media only screen and (max-width: 500px) {
		grid-template-columns: 50% 50%;

	}
`;
