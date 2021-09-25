import React, { useContext, useState } from 'react'
import { playerControllerStateContext } from '../../context/YouTubePlayerContext' 
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer'

import styled from 'styled-components'
import { ImShuffle } from 'react-icons/im'
import { shuffle } from '../../helpers/helpers'
 

function ShuffleBtn() {

    const [ { activeCue, shuffleIsOn }, dispatch ] = useContext(playerControllerStateContext)

    console.log(shuffleIsOn);


   function onClickHandler() {
        dispatch({type: PLAYER_ACTIONS.SET_SUFFLE_IS_ON})
    }

    return (
        <ShuffleBtnWrapper>
            <ImShuffle className={'shuffle-btn'} onClick={onClickHandler} style={{color: `${ shuffleIsOn ? '#1dd1a1' : '#fff'}`}}  />
        </ShuffleBtnWrapper>
    )
}

export default ShuffleBtn


const ShuffleBtnWrapper = styled.div`
.shuffle-btn {
    color: #fff;
    &:hover {
        cursor: pointer;
        color: #1dd1a1;

    }
}

`
