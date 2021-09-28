import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useRemoveSongFromPlaylist from '../hooks/useRemoveSongFromPlaylist';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

function RemoveSongFromPlaylistBtn({ videoId, playlistId }) {
  const { mutate } = useRemoveSongFromPlaylist();

  console.log(videoId, playlistId);

  return (
    <RemoveSongFromPlaylistBtnWrapper>
      <Button
        color={'primary'}
        endIcon={<IoIosCloseCircleOutline className='remove-btn' />}
        onClick={() => mutate({ videoId, playlistId })}
      >
        Remove Song
      </Button>
    </RemoveSongFromPlaylistBtnWrapper>
  );
}

const RemoveSongFromPlaylistBtnWrapper = styled.div`
  margin: 0.5rem;
  .remove-btn {
    color: #fff;
    font-size: 1.8rem;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default RemoveSongFromPlaylistBtn;
