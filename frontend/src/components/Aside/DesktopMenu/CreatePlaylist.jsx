import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useCreatePlaylist from '../../../hooks/useCreatePlaylist';

export default function CreatePlaylist() {
  const [textFieldInput, setTextFieldInput] = useState('');
  const { mutate } = useCreatePlaylist();

  console.log(textFieldInput);

  return (
    <CreatePalyListWrpapper>
      <TextField
        value={textFieldInput}
        onChange={(e) => setTextFieldInput(e.target.value)}
        size={'small'}
        variant={'filled'}
        color='primary'
        placeholder={'title'}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      />
      <button className='createPlaylist-btn' onClick={() => mutate({ title: textFieldInput })}>
        Save Playlist
      </button>
    </CreatePalyListWrpapper>
  );
}

const CreatePalyListWrpapper = styled.div`
  display: flex;

  flex-wrap: wrap;

  .createPlaylist-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c4c4c4;
    border: 1px solid #c4c4c4;
    width: 100px;
    text-align: center;
  }

  input,
  select,
  textarea {
    color: #fff;
    font-weight: 200;
    height: 1rem;
  }
`;
