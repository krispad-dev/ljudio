import React, { useContext, useState } from 'react';
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
    <div>
      <BsPlusCircle
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
    </div>
  );
}

export default AddToPlaylistBtn;
