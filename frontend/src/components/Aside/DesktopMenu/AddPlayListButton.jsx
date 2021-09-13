import React, { useState } from 'react';
import styled from 'styled-components';
import CreatePlaylist from './CreatePlaylist';

function AddPlayListButton() {
  return (
    <AddPlayListButtonWrapper>
      <h1>Add Playlist</h1>
      <CreatePlaylist />
    </AddPlayListButtonWrapper>
  );
}

const AddPlayListButtonWrapper = styled.div`
  margin-top: 10px;
  align-items: center;

  h1 {
    font-size: 20px;
  }

  button {
    all: unset;
    cursor: pointer;
    width: 2rem;
    padding-right: 0.5rem;
  }

  .icon {
    color: #c4c4c4;
    font-size: 2rem;
  }
`;

export default AddPlayListButton;
