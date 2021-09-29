import React, { useContext, useEffect } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { Button } from '@material-ui/core';
import { isInCueList } from '../helpers/helpers';

import styled from 'styled-components';
import toastMessage from '../helpers/toasts';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';

import { UiContext } from '../context/UiState';
import { UI_STATE_ACTIONS } from '../reducers/UiReducer';

const disabledBtnStyles = {
  pointerEvents: 'none',
  opacity: '40%',
};

function AddToCueBtn({ videoId }) {
  const [{ activeCue, cuePosition }, dispatch] = useContext(playerControllerStateContext);
  const { dispatch: dispatchUiContext } = useContext(UiContext);

  function saveToCue() {
    if (!isInCueList(videoId, activeCue)) {
      const activeCueSpliced = [...activeCue];
      activeCueSpliced.splice(cuePosition + 1, 0, videoId);

      dispatch({ type: PLAYER_ACTIONS.ADD_SONG_TO_CUE, payload: activeCueSpliced });
      setTimeout(() => {
        dispatchUiContext({
          type: UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION,
          payload: { saveSongToPlaylistSelectorSectionIsOpen: false },
        });
      }, 200);
      toastMessage('Song added to cue!');
    } else {
      return;
    }
  }

  return (
    <AddToCueBtnWrapper style={isInCueList(videoId, activeCue) ? disabledBtnStyles : {}}>
      <Button style={{ color: '#eee' }} onClick={saveToCue} endIcon={<BiAddToQueue className='add-btn' />}>
        + Add To Cue
      </Button>
    </AddToCueBtnWrapper>
  );
}

export default AddToCueBtn;

const AddToCueBtnWrapper = styled.div`
  margin: 0.5rem;

  .add-btn {
    font-size: 1.5rem;
    color: #fff;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;
