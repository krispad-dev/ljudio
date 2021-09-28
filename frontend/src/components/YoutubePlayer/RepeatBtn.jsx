import React, { useContext } from 'react'
import { playerControllerStateContext } from '../../context/YouTubePlayerContext' 
import { PLAYER_ACTIONS } from '../../reducers/YouTubePlayerReducer'

import styled from 'styled-components'
import { FiRepeat } from 'react-icons/fi'

 

function RepeatBtn() {

    const [ { repeatIsOn }, dispatch ] = useContext(playerControllerStateContext)

   function onClickHandler() {
        dispatch({type: PLAYER_ACTIONS.SET_REPEAT_IS_ON})
    }

    return (
        <RepeatBtnWrapper>
            <FiRepeat className={'shuffle-btn'} onClick={onClickHandler} style={{color: `${ repeatIsOn ? '#1dd1a1' : '#fff'}`}}  />
        </RepeatBtnWrapper>
    )
}

export default RepeatBtn


const RepeatBtnWrapper = styled.div`
.shuffle-btn {
    margin: 0.5rem;
    color: #fff;
    &:hover {
        cursor: pointer;
        color: #1dd1a1;

    }
}

`
