import React, { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiState';
import useGetSongs from '../hooks/useGetSongs';
import styled from 'styled-components';

import SongsList from '../components/MusicPage/SongsList';
import ArtiststList from '../components/MusicPage/ArtiststList';
import AllPlaylistsList from '../components/AllPlaylistsPage/AllPlaylistsList';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';

function MusicPage() {
  const { state, dispatch } = useContext(UiContext);
  const { data, isLoading } = useGetSongs(state.searchString);

  useEffect(() => {
    dispatch({
      type: UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING,
      payload: { headerSearchString: 'cold' },
    });
  }, []);

  return (
    <MusicPageWrapper>
      <div className='songs-list'>
        <SongsList />
      </div>

      <div className='album-artists-container'>
        <div className='artists-list'>
          {/* {data && state.headerSearchString && <h1>Artists</h1>} */}
          <ArtiststList />
        </div>

        <div className='playlists-list'>
          <AllPlaylistsList />
        </div>
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
    font-weight: 300;
    font-size: 1.5rem;
  }

  .album-artists-container {
    ::-webkit-scrollbar {
      display: none;
    }
    margin-top: 2rem;

    overflow-y: scroll;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .artists-list {
    margin-bottom: 2rem;
  }
  .playlists-list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
