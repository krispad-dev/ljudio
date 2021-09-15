import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

import useCreatePlaylist from '../../../hooks/useCreatePlaylist';

export default function CreatePlaylist() {
  const [textFieldInput, setTextFieldInput] = useState('');
  const { mutate } = useCreatePlaylist();

  console.log(textFieldInput);

  const savePlaylist = (e) => {
    e.preventDefault();
    mutate({ title: textFieldInput });
    setTextFieldInput('');
  };

  return (
    <CreatePalyListWrpapper>
      <form onSubmit={savePlaylist}>
        <AddIcon className='add-icon' onClick={savePlaylist} />
        <TextField
          value={textFieldInput}
          onChange={(e) => setTextFieldInput(e.target.value)}
          size={'small'}
          variant={'filled'}
          color='primary'
          placeholder={'Title'}
        />
      </form>
    </CreatePalyListWrpapper>
  );
}

const CreatePalyListWrpapper = styled.div`
  display: flex;

  flex-wrap: wrap;

  input,
  select,
  textarea {
    color: #fff;
    font-weight: 200;
    height: 0.5rem;
    width: 8rem;
  }

  form {
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
  }

  .add-icon {
    color: #c4c4c4;
    cursor: pointer;
  }
`;
