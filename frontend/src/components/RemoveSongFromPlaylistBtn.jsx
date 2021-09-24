import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useRemoveSongFromPlaylist from '../hooks/useRemoveSongFromPlaylist';
import styled from 'styled-components';

function RemoveSongFromPlaylistBtn({ videoId, playlistId }) {
  const { mutate } = useRemoveSongFromPlaylist();

  return (
    <RemoveSongFromPlaylistBtnWrapper>
      <IoIosCloseCircleOutline className='remove-btn' onClick={() => mutate({ videoId, playlistId })} />
    </RemoveSongFromPlaylistBtnWrapper>
  );
}

const RemoveSongFromPlaylistBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem;

  .remove-btn {
    font-size: 1.8rem;
    color: #c4c4c4;

    &:hover {
      color: #1dd1a1;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default RemoveSongFromPlaylistBtn;
