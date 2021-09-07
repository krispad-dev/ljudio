import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import useGetSongs from '../../hooks/useGetSongs';
import SongCard from './SongCard';
import Loader from '../Loader';
import styled from 'styled-components';

function SongsList() {
	const { state } = useContext(UiContext);
	const { data, isLoading } = useGetSongs(state.searchString);

	const songs = data?.searchResults?.content?.filter(item => item.type === 'song');
	
	return (
		<SongListWrapper>

			{isLoading && <Loader text='Loading music...' />}

			{data &&
				data.searchResults &&
				data.searchResults.content &&
				data.searchResults.content.map(item => {
					return <SongCard key={item.videoId} {...item} />;
				})}
		</SongListWrapper>
	);
}

export default SongsList;

const SongListWrapper = styled.div`

	::-webkit-scrollbar {
		display: none;
	}
	

	width: 100%;
	display: flex;
	flex-direction: column;
	height: 15rem;
	overflow-y: scroll;
	margin: 1rem 0rem;
`;
