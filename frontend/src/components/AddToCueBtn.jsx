import React, { useContext, useEffect } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { Button } from '@material-ui/core';
import { isInCueList } from '../helpers/helpers';

import styled from 'styled-components';
import toastMessage from '../helpers/toasts';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';

const disabledBtnStyles = {
  pointerEvents: 'none',
  opacity: '40%',
};

function AddToCueBtn({ videoId }) {
  const [{ activeCue, cuePosition }, dispatch] = useContext(playerControllerStateContext);

  console.log(videoId);

  function saveToCue() {
    const activeCueSpliced = [...activeCue];
    activeCueSpliced.splice(cuePosition + 1, 0, videoId);

    dispatch({ type: PLAYER_ACTIONS.ADD_SONG_TO_CUE, payload: activeCueSpliced });
    toastMessage('Song added to cue!');
  }

  return (
    <AddToCueBtnWrapper style={isInCueList(videoId, activeCue) ? disabledBtnStyles : {}}>
      <Button
        // color={'primary'}

        style={{ color: '#eee' }}
        onClick={saveToCue}
        endIcon={<BiAddToQueue className='add-btn' />}
      >
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
