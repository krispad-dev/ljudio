import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import useGetSongs from '../../hooks/useGetSongs';
import SongCard from './SongCard';
import SkeletonLoader from '../Loaders/SkeletonLoader';
import styled from 'styled-components';


function SongsList() {
	
	const { state } = useContext(UiContext);
	const { data, isLoading } = useGetSongs(state.headerSearchString);

	return (
		<>
			{isLoading && <SkeletonLoader />}
	
			<SongListWrapper>
				{data &&
					data.searchResults &&
					data.searchResults.content &&
					data.searchResults.content.map(item => {
						return <SongCard key={item.videoId} {...item} />;
					})}
			</SongListWrapper>
		</>
	);
}

export default SongsList;

const SongListWrapper = styled.div`
    box-shadow: 25px 25px 35px rgba(104, 104, 104, 0.05);
	::-webkit-scrollbar {
		display: none;
	}
	display: flex;
	flex-direction: column;
	height: 13rem;
	overflow-y: scroll;
	margin: 0.5rem 0rem;
`;
