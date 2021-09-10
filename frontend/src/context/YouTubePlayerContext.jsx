import React, { createContext, useReducer } from 'react'
import { playerControllerReducer } from '../reducers/YouTubePlayerReducer'


export const playerControllerStateContext = createContext()

const initialState = {

    playVideo: {},
    pauseVideo: {},
    videoIsShowing: false,
    setVolume: 50,
    currentSong: '',
    durationInMinutes: 0,
    seekTo: 0,
    currentTime: 0,
    playerIsPaused: true

}



export function PlayerControllerStateProvider({ children }) {

    const [ playerState, dispatch ] = useReducer(playerControllerReducer, initialState)

    return <playerControllerStateContext.Provider value={[ playerState, dispatch ]} >{children}</playerControllerStateContext.Provider>


}


