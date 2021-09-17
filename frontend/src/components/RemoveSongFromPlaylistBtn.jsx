import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useRemoveSongFromPlaylist from '../hooks/useRemoveSongFromPlaylist';
import styled from 'styled-components';

function RemoveSongFromPlaylistBtn({ videoId, playlistId }) {
  const { mutate } = useRemoveSongFromPlaylist();

  return (
    <RemoveSongFromPlaylistBtnWrapper>
      <TiDeleteOutline className='remove-btn' onClick={() => mutate({ videoId, playlistId })} />
    </RemoveSongFromPlaylistBtnWrapper>
  );
}

const RemoveSongFromPlaylistBtnWrapper = styled.div`
  display: flex;
  justify-content: center;

  .remove-btn {
    font-size: 1.6rem;
    color: #c4c4c4;

    &:hover {
      color: #2ecc71;
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  }
`;

export default RemoveSongFromPlaylistBtn;
