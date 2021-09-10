import React from 'react';
import styled from 'styled-components';
import AddBoxIcon from '@material-ui/icons/AddBox';


function AddPlayListButton() {
  return (
    <AddPlayListButtonWrapper>
      <button startIcon>{<AddBoxIcon className='icon' />}</button>
      <h1>Add Playlist</h1>
    </AddPlayListButtonWrapper>
  );
}

const AddPlayListButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
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
