import React, { useState } from 'react';
import styled from 'styled-components';
import CreatePlaylist from './CreatePlaylist';

function AddPlayListButton() {
  return (
    <AddPlayListButtonWrapper>
      <CreatePlaylist />
    </AddPlayListButtonWrapper>
  );
}

const AddPlayListButtonWrapper = styled.div`
  margin-top: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #c4c4c4;
    font-size: 1.1rem;
    font-weight: lighter;
    margin-bottom: 1rem;
  }
`;

export default AddPlayListButton;
