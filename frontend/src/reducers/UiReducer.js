

export function UiReducer(state, action) {

    switch(action.type) {

        case 'TOGGLE_MENU':
            return {
                ...state,
                menuOpen: !state.menuOpen
            }

        case 'SEARCH_MUSIC':
            return {
                ...state,
                musicData: { ...action.payload.musicData }
            }

        default: 
            return state;
    }

} 


