import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useRemoveSongFromPlaylist from '../hooks/useRemoveSongFromPlaylist';

function RemoveSongFromPlaylistBtn({ videoId, playlistId }) {
  const { mutate } = useRemoveSongFromPlaylist();

  return (
    <TiDeleteOutline style={{ color: '#fff', fontSize: '1.6rem', cursor: 'pointer' }} onClick={() => mutate({ videoId, playlistId })} />
  );
}

export default RemoveSongFromPlaylistBtn;
