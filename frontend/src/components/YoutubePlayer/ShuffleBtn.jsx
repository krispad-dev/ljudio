import React, { useContext, useState } from 'react'
import { playerControllerStateContext } from '../../context/YouTubePlayerContext' 
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer'

import styled from 'styled-components'
import { ImShuffle } from 'react-icons/im'

 

function ShuffleBtn() {

    const [ { activeCue, shuffleIsOn, repeatIsOn }, dispatch ] = useContext(playerControllerStateContext)

   function onClickHandler() {
        dispatch({type: PLAYER_ACTIONS.SET_SUFFLE_IS_ON})
        if (repeatIsOn) {
            dispatch({type: PLAYER_ACTIONS.SET_REPEAT_IS_ON})
        }

    }

    return (
        <ShuffleBtnWrapper>
            <ImShuffle className={'shuffle-btn'} onClick={onClickHandler} style={{color: `${ shuffleIsOn ? '#1dd1a1' : '#fff'}`}}  />
        </ShuffleBtnWrapper>
    )
}

export default ShuffleBtn


const ShuffleBtnWrapper = styled.div`
display: flex;
.shuffle-btn {
    margin: 0.5rem;
    color: #fff;
    &:hover {
        cursor: pointer;
        color: #1dd1a1;

    }
}

`
