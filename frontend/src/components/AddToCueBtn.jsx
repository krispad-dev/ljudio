import React, { useContext } from 'react';
import { BiAddToQueue, BiNoEntry } from 'react-icons/bi';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { isInCueList } from '../helpers/helpers';

import styled from 'styled-components';
import toastMessage from '../helpers/toasts';

const disabledBtnStyles = {
  pointerEvents: 'none',
  opacity: '40%'
}

function AddToCueBtn({ videoId }) {

  const [{ activeCue, cuePosition }] = useContext(playerControllerStateContext);

  function saveToCue() {
    activeCue.splice(cuePosition + 1, 0, videoId);
    toastMessage('Song added to cue!');
  }

  return (
    <AddToCueBtnWrapper>
      <BiAddToQueue className='add-btn' onClick={saveToCue} style={isInCueList(videoId, activeCue) ? disabledBtnStyles : {}} />
    </AddToCueBtnWrapper>
  );
}

export default AddToCueBtn;

const AddToCueBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  .add-btn {
    font-size: 1.5rem;
    color: #c4c4c4;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;
