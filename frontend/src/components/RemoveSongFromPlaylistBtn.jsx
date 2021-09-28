import React, { useContext } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useRemoveSongFromPlaylist from '../hooks/useRemoveSongFromPlaylist';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';

function RemoveSongFromPlaylistBtn({ videoId, playlistId }) {
  const { mutate } = useRemoveSongFromPlaylist();
  const { dispatch } = useContext(UiContext);

  function onClickHandler() {
    mutate({ videoId, playlistId });
    setTimeout(() => {
      dispatch({
        type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION,
        payload: { saveSongToPlaylistSelectorSectionIsOpen: false },
      });
    }, 300);
  }

  return (
    <RemoveSongFromPlaylistBtnWrapper>
      <Button
        style={{ color: '#eee' }}
        endIcon={<IoIosCloseCircleOutline className='remove-btn' />}
        onClick={onClickHandler}
      >
        - Remove Song
      </Button>
    </RemoveSongFromPlaylistBtnWrapper>
  );
}

const RemoveSongFromPlaylistBtnWrapper = styled.div`
  margin: 0.5rem;
  .remove-btn {
    color: #fff;
    font-size: 1.8rem;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default RemoveSongFromPlaylistBtn;
