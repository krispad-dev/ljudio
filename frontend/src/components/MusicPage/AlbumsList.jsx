import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import Loader from '../Loader';
import AlbumCard from './AlbumCard';
import styled from 'styled-components';
import useAlbums from '../../hooks/useGetAlbums';

function AlbumsList() {
	const { state, isLoading } = useContext(UiContext);
	const { data } = useAlbums(state.searchString);

	return (
		<AlbumsListWrapper>
			{isLoading && <Loader text='Loading music...' />}

			{data &&
				data.searchResults &&
				data.searchResults.content &&
				data.searchResults.content.map(item => {
					return <AlbumCard key={item.videoId} {...item} />;
				})}
		</AlbumsListWrapper>
	);
}

export default AlbumsList;

const AlbumsListWrapper = styled.div`
	width: 100;
	display: grid;
	gap: 0.5rem;
	grid-template-rows: 10rem 10rem;
	grid-template-columns: 20% 20% auto 20% 20%;

`;

