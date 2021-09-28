import React, { createContext, useReducer, useEffect } from 'react';
import { playerControllerReducer, PLAYER_ACTIONS } from '../reducers/YouTubePlayerReducer';
import useGetAllCued from '../hooks/useGetAllCued';

export const playerControllerStateContext = createContext();

const initialState = {
	playVideo: {},
	pauseVideo: {},
	fullscreenVideoMode: false,
	setVolume: 50,
	currentSong: {},
	durationInMinutes: 0,
	seekTo: 0,
	currentTime: 0,
	playerIsPaused: true,
	isPlaying: false,

	shuffledCue: [],
	pendingUserCue: [],
	pendingCue: [],
	activeCue: [],
	cuePosition: 0,
	shuffleIsOn: false,
	repeatIsOn: false,
};

export function PlayerControllerStateProvider({ children }) {
	const [playerState, dispatch] = useReducer(playerControllerReducer, initialState);

	return (
		<playerControllerStateContext.Provider value={[playerState, dispatch]}>
			{children}
		</playerControllerStateContext.Provider>
	);
}
