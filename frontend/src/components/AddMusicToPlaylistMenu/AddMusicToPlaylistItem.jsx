import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import useSaveSongToPlaylist from '../../hooks/useSaveSongToPlaylist';
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';
import useGetOneSavedUserPlaylist from '../../hooks/useGetOneSavedUserPlaylist';

function AddMusicToPlaylistItem({ title, id }) {
  const { mutate } = useSaveSongToPlaylist();
  const { state, dispatch } = useContext(UiContext);
  const { data } = useGetOneSavedUserPlaylist(id);
  const songsInPlaylistArray = (data && data.playlist.songs) || [];

  function onClickHandler() {
    mutate({ playlistId: id, videoId: state.songToSaveToUserPlaylist });
    setTimeout(() => {
      dispatch({
        type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION,
        payload: { saveSongToPlaylistSelectorSectionIsOpen: false },
      });
    }, 300);
  }

  return (
    <AddMusicToPlaylistItemWrapper>
      <Button
        className={
          songsInPlaylistArray.includes(state.songToSaveToUserPlaylist) ? 'music-isInPlaylist' : 'confirm-music-btn'
        }
        onClick={onClickHandler}
      >
        {title}
      </Button>
    </AddMusicToPlaylistItemWrapper>
  );
}

const AddMusicToPlaylistItemWrapper = styled.li`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  &:hover {
    opacity: 60%;
  }

  .confirm-music-btn {
    color: #1dd1a1;
    cursor: pointer;
  }

  .music-isInPlaylist {
    color: #c4c4c4;
    pointer-events: none;
    text-decoration: line-through;
  }
`;

export default AddMusicToPlaylistItem;
