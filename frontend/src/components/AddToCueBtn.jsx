import React, { useContext } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { Button } from '@material-ui/core';

import styled from 'styled-components';

import toastMessage from '../helpers/toasts';

function AddToCueBtn({ videoId }) {
  const [{ activeCue, cuePosition }] = useContext(playerControllerStateContext);

  console.log(videoId);

  function saveToCue() {
    activeCue.splice(cuePosition + 1, 0, videoId);
    toastMessage('Song added to cue!');
  }

  return (
    <AddToCueBtnWrapper>
      <Button color={'primary'} onClick={saveToCue} endIcon={<BiAddToQueue className='add-btn' />}>
        Add To Cue
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
