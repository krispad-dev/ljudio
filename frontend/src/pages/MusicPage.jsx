import React, { useContext } from 'react';
import { UiContext } from '../context/UiState';
import useGetSongs from '../hooks/useGetSongs';
import styled from 'styled-components';

import SongsList from '../components/MusicPage/SongsList';
import ArtiststList from '../components/MusicPage/ArtiststList';
import AlbumsList from '../components/MusicPage/AlbumsList';

function MusicPage() {
	const { state } = useContext(UiContext);
	const { data, isLoading } = useGetSongs(state.searchString);

	return (
		<MusicPageWrapper>

			<div className='songs-list'>
				{data && state.headerSearchString && <h1>SONGS</h1>}
				<SongsList />
			</div>

			<div className="album-artists-container">
				<div className='artists-list'>
					{data && state.headerSearchString && <h1>ARTISTS</h1>}
					<ArtiststList />
				</div>

{/* 				<div className='albums-list'>
					{data && state.headerSearchString && <h1>ALBUMS</h1>}
					<AlbumsList />
				</div> */}
			</div>
		</MusicPageWrapper>
	);
}

export default MusicPage;

const MusicPageWrapper = styled.div`
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	width: 100%;
	h1 {
		background-color: rgba(255, 255, 255, 0.05);
		font-weight: 400;
		margin-top: 1rem;
		font-size: 1.5rem;
	}

	.album-artists-container {
		::-webkit-scrollbar {
		display: none;
	}
		margin-top: 2rem;
		overflow-y: scroll;
		overflow-y: scroll;

	}
`;
