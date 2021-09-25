import React, { useContext } from 'react';
import { playerControllerStateContext } from '../context/YouTubePlayerContext';
import { PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import useRemoveFromCue from '../hooks/useRemoveFromCue';
import styled from 'styled-components';


function RemoveFromCueBtn({ cueId, videoId, index }) {

    const { mutate } = useRemoveFromCue();
    const [ { pendingUserCue, activeCue, cuePositon }, dispatch ] = useContext(playerControllerStateContext);

    function onClickHandler(index) {
        const filteredPendingUserCue = [...activeCue].filter(( cueItem, i ) => {
            return index !== i;
        })
        dispatch({type: PLAYER_ACTIONS.SET_ACTIVE_CUE, payload: filteredPendingUserCue})
    }

    return (
        <RemoveFromCueBtnWrapper>
            <IoIosCloseCircleOutline
            className="remove-btn"
            onClick={(e) => onClickHandler(index)} />
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