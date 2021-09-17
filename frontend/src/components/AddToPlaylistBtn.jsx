import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '.././reducers/UiReducer';
import { BsPlusCircle } from 'react-icons/bs';

function AddToPlaylistBtn({ videoId }) {
  const { state, dispatch } = useContext(UiContext);
  const [addToPlaylistsBoxIsOpen, setAddToPlaylistsBoxIsOpen] = useState(false);

  function selectSongToAddToPlaylistHandler() {
    setAddToPlaylistsBoxIsOpen(!addToPlaylistsBoxIsOpen);

    dispatch({
      type: UI_STATE_ACTIONS.SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN,
    });
    dispatch({
      type: UI_STATE_ACTIONS.SET_SONG_TO_SAVE_TO_USER_PLAYLIST,
      payload: { songToSaveToUserPlaylist: videoId ? videoId : '' },
    });
  }

  return (
    <AddToPlaylistBtnWrapper>
      <BsPlusCircle
        className='add-btn'
        style={{
          marginRight: '1rem',
          fontSize: '1.2rem',
          cursor: 'pointer',
          color: `${
            state.saveSongToPlaylistSelectorSectionIsOpen && videoId === state.songToSaveToUserPlaylist ? '#2ecc71' : ''
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

  .add-btn {
    font-size: 1.5rem;
    color: #c4c4c4;

    &:hover {
      color: #2ecc71;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default AddToPlaylistBtn;
