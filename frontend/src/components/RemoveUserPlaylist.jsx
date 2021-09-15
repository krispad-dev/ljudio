import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useRemoveUserPlayList from '../hooks/useRemoveUserPlaylist';


function RemoveUserPlaylist({ playlistId }) {

    console.log(playlistId);

    const { mutate } = useRemoveUserPlayList();

    return (
        <TiDeleteOutline 
        style={{ color: 'red', fontSize: '1.6rem' }}
        onClick={() => mutate({ id: playlistId })} />
    );

}

export default RemoveUserPlaylist;
