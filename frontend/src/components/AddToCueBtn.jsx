import React from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import useAddToCue from '../hooks/useAddToCue';
import styled from 'styled-components';

import toastMessage from '../helpers/toasts';
import { ToastContainer } from 'react-toastify';

function AddToCueBtn({ videoId }) {
  const { mutate } = useAddToCue();

  return (
    <AddToCueBtnWrapper>
      <ToastContainer />
      <BiAddToQueue
        className='add-btn'
        onClick={() => {
          toastMessage('Song Added To Cue!'), mutate({ videoId });
        }}
      />
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
