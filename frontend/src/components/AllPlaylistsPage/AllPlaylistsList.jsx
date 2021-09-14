import React from 'react';
import AllPlaylistsListItemCard from './AllPlaylistsListItemCard';
import styled from 'styled-components';
import useGetAllPlaylists from '../../hooks/useGetAllPlaylists' 


function AllPlaylistsList() {

    const { data } = useGetAllPlaylists() 


	return (
		<AllPlaylistsListWrapper>
			{data && data.playlists && data.playlists.map((playlist) => <AllPlaylistsListItemCard key={playlist.playlistId} {...playlist} /> )}
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
	gap: 0.5rem;
	grid-template-columns: 15vw 15vw  15vw  15vw ;





`