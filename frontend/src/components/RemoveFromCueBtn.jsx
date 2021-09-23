import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import useRemoveFromCue from '../hooks/useRemoveFromCue';


function RemoveFromCueBtn({ cueId }) {

    const { mutate } = useRemoveFromCue();

    return (
        <TiDeleteOutline 
        style={{ fontSize: '1.5rem', color: '#FFF' }}
        onClick={() => mutate({ cueId })} />
    );
}

export default RemoveFromCueBtn;
