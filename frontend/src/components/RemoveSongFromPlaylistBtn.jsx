import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useRemoveSongFromPlaylist from '../hooks/useRemoveSongFromPlaylist';


function RemoveSongFromPlaylistBtn({ videoId, playlistId }) {

    const { mutate } = useRemoveSongFromPlaylist();

    return (
        <TiDeleteOutline 
        style={{ color: 'red', fontSize: '1.6rem' }}
        onClick={() => mutate({ videoId, playlistId })} />
    );
}

export default RemoveSongFromPlaylistBtn;
