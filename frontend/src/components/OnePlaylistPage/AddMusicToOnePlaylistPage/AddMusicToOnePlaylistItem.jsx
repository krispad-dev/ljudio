import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import useSaveSongToPlaylist from '../../../hooks/useSaveSongToPlaylist';
import { UiContext } from '../../../context/UiState';
import { UI_STATE_ACTIONS } from '../../../reducers/UiReducer';

function AddMusicToOnePlaylistItem({ title, id }) {
  const { mutate } = useSaveSongToPlaylist();
  const { state, dispatch } = useContext(UiContext);

  function addSongToOnePlaylistHandler() {
    setTimeout(() => {
      dispatch({ 
        type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION, 
        payload: { saveSongToPlaylistSelectorSectionIsOpen: false } });
    }, 300);
  }

  return (
    <AddMusicToOnePlaylistItemWrapper>
      <Button className='confirm-add-music-to-playlist-btn' onClick={addSongToOnePlaylistHandler}>
        {title}
      </Button>
    </AddMusicToOnePlaylistItemWrapper>
  );
}

const AddMusicToOnePlaylistItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }

  .confirm-add-music-to-playlist-btn {
    color: #2ecc71;
  }
`;

export default AddMusicToOnePlaylistItem;
