import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useRemoveUserPlayList from '../hooks/useRemoveUserPlaylist';


function RemoveUserPlaylist({ playlistId }) {

    const { mutate } = useRemoveUserPlayList();

    return (
        <TiDeleteOutline 
        style={{ color: '#fff', fontSize: '1.6rem', cursor: 'pointer' }}
        onClick={() => mutate({ id: playlistId })} />
    );

}

export default RemoveUserPlaylist;
