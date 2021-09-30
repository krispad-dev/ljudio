import React, { useContext, useEffect } from 'react';

import styled from 'styled-components';

import AllPlaylistsListItemCard from './AllPlaylistsListItemCard';
import useSearchPlaylists from '../../hooks/useSearchPlaylists';

import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';
import GridLoader from '../Loaders/GridLoader';

import { useLocation } from 'react-router-dom';

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

function AllPlaylistsList() {
  // const { data: allPlaylists } = useGetAllPlaylists();
  const { state, dispatch } = useContext(UiContext);

  const { data: allPlaylists, isLoading } = useSearchPlaylists(state.headerSearchString);

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch({
      type: UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING,
      payload: { headerSearchString: '' },
    });
  }, []);

  return (
    <>
      {isLoading && <GridLoader />}
      {pathname !== '/playlists' && allPlaylists && allPlaylists.playlists && allPlaylists.playlists.length > 0 && (
        <h1>Playlists</h1>
      )}

      <AllPlaylistsListWrapper>
        {pathname === '/playlists' && allPlaylists && allPlaylists.playlists && !allPlaylists.playlists.length && (
          <h2 className='no-playlist'>No Playlists Found!</h2>
        )}
        {allPlaylists &&
          allPlaylists.playlists &&
          allPlaylists.playlists.map((playlist, i) => (
            <AllPlaylistsListItemCard key={playlist.playlistId} {...playlist} bgColor={colors[i]} />
          ))}
      </AllPlaylistsListWrapper>
    </>
  );
}

export default AllPlaylistsList;

const AllPlaylistsListWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 12rem;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  .no-playlist {
    padding: 1rem;
  }
`;
