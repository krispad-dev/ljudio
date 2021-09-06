export const PLAYER_ACTIONS = {
	PLAY_VIDEO: 'PLAY_VIDEO',
	PAUSE_VIDEO: 'PAUSE_VIDEO',
	SET_SHOW_VIDEO: 'SET_HOW_VIDEO',
	SET_VOLUME: 'SET_VOLUME',
	SET_CURRENT_SONG: 'SET_CURRENT_SONG',
	SET_DURATION: 'SET_DURATION',
	SEEK_TO: 'SEEK_TO',
	SET_CURRENT_TIME: 'SET_CURRENT_TIME',
	SET_PLAYER_IS_PAUSED: 'SET_PLAYER_IS_PAUSED'
};

export function playerControllerReducer(state, action) {
	switch (action.type) {
		case PLAYER_ACTIONS.PLAY_VIDEO:
			return {
				...state,
				playVideo: action.payload,
			};

		case PLAYER_ACTIONS.PAUSE_VIDEO:
			return {
				...state,
				pauseVideo: action.payload,
			};

		case PLAYER_ACTIONS.SET_SHOW_VIDEO:
			return {
				...state,
				videoIsShowing: !state.videoIsShowing,
			};

		case PLAYER_ACTIONS.SET_VOLUME:
			return {
				...state,
				setVolume: action.payload,
			};

		case PLAYER_ACTIONS.SET_CURRENT_SONG:
			return {
				...state,
				currentSong: action.payload,
			};

		case PLAYER_ACTIONS.SET_DURATION:
			return {
				...state,
				durationInMinutes: action.payload,
			};

		case PLAYER_ACTIONS.SEEK_TO:
			return {
				...state,
				seekTo: action.payload,
			};

		case PLAYER_ACTIONS.SET_CURRENT_TIME:
			return {
				...state,
				currentTime: action.payload,
			};
		case PLAYER_ACTIONS.SET_PLAYER_IS_PAUSED:
			return {
				...state,
				playerIsPaused: action.payload,
			};
	}
}
