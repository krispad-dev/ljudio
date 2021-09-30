import React, { useContext } from 'react';
import { UiContext } from '../../context/UiState';
import styled from 'styled-components';
import useGetArtists from '../../hooks/useGetArtists';
import ArtistCard from './ArtistCard';
import GridLoader from '../Loaders/GridLoader';

const colors = [
  '#ff9ff3',
  '#feca57',
  '#ff6b6b',
  '#48dbfb',
  '#1dd1a1',
  '#f368e0',
  '#ff9f43',
  '#ff9ff3',
  '#feca57',
  '#ff6b6b',
  '#48dbfb',
  '#1dd1a1',
  '#f368e0',
  '#ff9f43',
  '#ff9ff3',
  '#feca57',
  '#ff6b6b',
  '#48dbfb',
  '#1dd1a1',
  '#f368e0',
  '#ff9f43',
];

function ArtiststList() {
  const { state } = useContext(UiContext);
  const { data, isLoading } = useGetArtists(state.headerSearchString);

  return (
    <>
      {isLoading && <GridLoader />}

      {data && data.searchResults && data.searchResults.content && data.searchResults.content.length > 0 && (
        <h2 style={{ fontWeight: '300', fontSize: '1.5rem' }}>Artists</h2>
      )}
      <ArtistsListWrapper>
        {data &&
          data.searchResults &&
          data.searchResults.content &&
          data.searchResults.content.map((item, i) => {
            return <ArtistCard key={item.browseId} bgColor={colors[i]} {...item} />;
          })}
      </ArtistsListWrapper>
    </>
  );
}

export default ArtiststList;

const ArtistsListWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 12rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
