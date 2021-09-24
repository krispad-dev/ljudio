import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useRemoveFromCue from '../hooks/useRemoveFromCue';
import styled from 'styled-components';


function RemoveFromCueBtn({ cueId }) {

    const { mutate } = useRemoveFromCue();

    return (
        <RemoveFromCueBtnWrapper>
            <IoIosCloseCircleOutline
            className="remove-btn"
            onClick={() => mutate({ cueId })} />
        </RemoveFromCueBtnWrapper>
    );
}

export default RemoveFromCueBtn;


const RemoveFromCueBtnWrapper = styled.div`

    .remove-btn {
        font-size: 1.8rem;
        color: #FFF;
        margin-top: 0.2rem;
        margin-left: 0.3rem;

        &:hover {
            color: '#c0392b';
            cursor: pointer;
        }
    }
`;