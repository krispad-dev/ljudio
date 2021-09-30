export const PLAYER_ACTIONS = {
	PLAY_VIDEO: 'PLAY_VIDEO',
	PAUSE_VIDEO: 'PAUSE_VIDEO',
	SET_FULLSCREEN_VIDEO_MODE: 'SET_FULLSCREEN_VIDEO_MODE',
	SET_VOLUME: 'SET_VOLUME',
	SET_CURRENT_SONG: 'SET_CURRENT_SONG',
	SET_DURATION: 'SET_DURATION',
	SEEK_TO: 'SEEK_TO',
	SET_CURRENT_TIME: 'SET_CURRENT_TIME',
	SET_PLAYER_IS_PAUSED: 'SET_PLAYER_IS_PAUSED',
	SET_IS_PLAYING: 'SET_IS_PLAYING',

	SET_USER_PENDING_CUE: 'SET_USER_PENDING_CUE',
	SET_PENDING_CUE: 'SET_PENDING_CUE', // Listor som componenter med låtar laddar in
	SET_ACTIVE_CUE: 'SET_ACTIVE_CUE', // Den aktiva spellistan som spelaren lyssnar på 
	SET_ACTIVE_CUE_POSITION: 'SET_ACTIVE_CUE_POSITION', // Den aktiva positionen som spelaren lyssnar på

	SET_NEXT_IN_CUE: 'SET_NEXT_IN_CUE',
	SET_PREVIOUS_IN_CUE: 'SET_PREVIOUS_IN_CUE',

	SET_SUFFLE_IS_ON: 'SET_SUFFLE_IS_ON',
	SET_SHUFFLED_CUE: 'SET_SHUFFLED_CUE',

	ADD_SONG_TO_CUE: 'ADD_SONG_TO_CUE',
	SET_REPEAT_IS_ON: 'SET_REPEAT_IS_ON'

};

import { randomNumber } from "../helpers/helpers";

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

		case PLAYER_ACTIONS.SET_FULLSCREEN_VIDEO_MODE:
			return {
				...state,
				fullscreenVideoMode: !state.fullscreenVideoMode,
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
		case PLAYER_ACTIONS.SET_IS_PLAYING:
			return {
				...state,
				isPlaying: action.payload,
			};


		/// PLAYER CUE 
			
		case PLAYER_ACTIONS.SET_PENDING_CUE:
			return {
				...state,
				pendingCue: action.payload,
			};
		case PLAYER_ACTIONS.SET_USER_PENDING_CUE:
			return {
				...state,
				pendingUserCue: action.payload,
			};
		case PLAYER_ACTIONS.SET_ACTIVE_CUE:
			return {
				...state,
				activeCue: action.payload,
			};
		case PLAYER_ACTIONS.SET_ACTIVE_CUE_POSITION:
			return {
				...state,
				cuePosition: action.payload,
			};

		case PLAYER_ACTIONS.SET_NEXT_IN_CUE:
			if(!state.shuffleIsOn) {

				return {
					...state,
					cuePosition: state.activeCue.length - 1 === state.cuePosition ? state.cuePosition : state.cuePosition + 1
				};

			}

			if(state.shuffleIsOn) {
			
				return {
					...state,
					cuePosition: randomNumber(0, state.activeCue.length -1 )
				};
				
			}



		case PLAYER_ACTIONS.SET_PREVIOUS_IN_CUE:
			if(!state.shuffleIsOn) {

				return {
					...state,
					cuePosition: state.cuePosition === 0 ? state.cuePosition = 0 : state.cuePosition - 1,
				}; 

			}

			if(state.shuffleIsOn) {
			
				return {
					...state,
					cuePosition: randomNumber(0, state.activeCue.length -1 )
				};
				
			}


		case PLAYER_ACTIONS.SET_SUFFLE_IS_ON:
			return {
				...state,
				shuffleIsOn: !state.shuffleIsOn,
			};

		case PLAYER_ACTIONS.SET_SHUFFLED_CUE:
			return {
				...state,
				shuffledCue: action.payload,
			};

			
		case PLAYER_ACTIONS.ADD_SONG_TO_CUE:
			
			return {
				...state,
				activeCue: action.payload,
			};

		case PLAYER_ACTIONS.SET_REPEAT_IS_ON:
			
			return {
				...state,
				repeatIsOn: !state.repeatIsOn,
			};

			
		default:
			return state;
	}
}


