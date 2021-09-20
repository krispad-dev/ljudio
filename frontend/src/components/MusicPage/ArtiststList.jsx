import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import styled from 'styled-components';
import useGetArtists from '../../hooks/useGetArtists';
import ArtistCard from './ArtistCard';
import SkeletonLoader from '../Loaders/SkeletonLoader';

function ArtiststList() {
	const { state } = useContext(UiContext);
	const { data, isLoading } = useGetArtists(state.headerSearchString);
	console.log(data);

	return (
		<>
			{isLoading && <SkeletonLoader />}
			<ArtistsListWrapper>
				{data &&
					data.searchResults &&
					data.searchResults.content &&
					data.searchResults.content.map(item => {
						return <ArtistCard key={item.browseId} {...item} />;
					})}
			</ArtistsListWrapper>
		</>
	);
}

export default ArtiststList;

const ArtistsListWrapper = styled.div`

	width: 100%;
	display: grid;
	gap: 0.5rem;
	grid-auto-rows: 12rem;
	grid-template-columns: 20% 20% auto 20% 20%;
	@media only screen and (max-width: 1000px) {
		grid-template-columns: 50% 50%

	}
`;
