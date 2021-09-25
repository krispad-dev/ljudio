import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '.././reducers/UiReducer';
import { BsPlusCircle } from 'react-icons/bs';

import { useLocation } from 'react-router-dom';

function AddToPlaylistBtn({ videoId }) {
  const { state, dispatch } = useContext(UiContext);
  const { pathname } = useLocation();

  function selectSongToAddToPlaylistHandler() {
    dispatch({ type: UI_STATE_ACTIONS.SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN });
    dispatch({
      type: UI_STATE_ACTIONS.SET_SONG_TO_SAVE_TO_USER_PLAYLIST,
      payload: { songToSaveToUserPlaylist: videoId ? videoId : '' },
    });
  }

  useEffect(() => {
    dispatch({
      type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION,
      payload: { saveSongToPlaylistSelectorSectionIsOpen: false },
    });
  }, [pathname]);

  return (
    <AddToPlaylistBtnWrapper>
      <BsPlusCircle
        className='add-btn'
        style={{
          cursor: 'pointer',
          color: `${
            state.saveSongToPlaylistSelectorSectionIsOpen && videoId === state.songToSaveToUserPlaylist ? '#1dd1a1' : ''
          }`,
        }}
        onClick={selectSongToAddToPlaylistHandler}
      />
    </AddToPlaylistBtnWrapper>
  );
}

const AddToPlaylistBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;

  .add-btn {
    font-size: 1.4rem;
    color: #c4c4c4;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default AddToPlaylistBtn;
