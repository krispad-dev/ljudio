import React, { useContext } from 'react'
import { UiContext } from '../../context/UiState'

import { UI_STATE_ACTIONS } from '../../reducers/UiReducer'

import { Button } from '@material-ui/core';
import { AiOutlineMenu } from 'react-icons/ai'

import useAuth from '../../hooks/useAuth';


function OpenMobileMenuBtn() {


    const { state, dispatch } = useContext(UiContext)
    const { data } = useAuth()


    return (
        <div>
            <Button
            onClick={() =>  dispatch({ type: UI_STATE_ACTIONS.SET_MOBILE_MENU_IS_OPEN })}
            style={{marginLeft: '1rem'}} 
            variant={'outlined'} 
            color={'primary'} 
            endIcon={<AiOutlineMenu />}> {data.user.userName} </Button>
        </div>
    )
}

export default OpenMobileMenuBtn


