import React, { useContext } from 'react';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import useRemoveFromCue from '../hooks/useRemoveFromCue';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';

function RemoveFromCueBtn() {
  const [{ activeCue }, dispatch] = useContext(playerControllerStateContext);
  const { state, dispatch: dispatchUiContext } = useContext(UiContext);

  function onClickHandler(index) {
    const filteredPendingUserCue = [...activeCue].filter((cueItem, i) => {
      return index !== i;
    });
    dispatch({ type: PLAYER_ACTIONS.SET_ACTIVE_CUE, payload: filteredPendingUserCue });
    setTimeout(() => {
      dispatchUiContext({
        type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION,
        payload: { saveSongToPlaylistSelectorSectionIsOpen: false },
      });
    }, 200);
  }

  return (
    <RemoveFromCueBtnWrapper>
      <Button
        endIcon={<IoIosCloseCircleOutline className='remove-btn' />}
        style={{ color: '#eee' }}
        onClick={(e) => onClickHandler(state.selectedSongCardIndex)}
      >
        - Remove From Cue
      </Button>
    </RemoveFromCueBtnWrapper>
  );
}

export default RemoveFromCueBtn;

const RemoveFromCueBtnWrapper = styled.div`
  margin: 0.5rem;

  .remove-btn {
    font-size: 2.5rem;
    color: #c4c4c4;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;
