export const UI_STATE_ACTIONS = {

  TOGGLE_MENU: ' TOGGLE_MENU',
  SET_HEADER_SEARCH_STRING: 'SET_HEADER_SEARCH_STRING',
  SET_SONG_TO_SAVE_TO_USER_PLAYLIST: 'SET_SONG_TO_SAVE_TO_USER_PLAYLIST',
  SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN: 'SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN',
  SET_FULLSCREEN_VIDEO_MODE: 'SET_FULLSCREEN_VIDEO_MODE',
  SET_PLAYLIST_ID_TO_SAVE: 'SET_PLAYLIST_ID_TO_SAVE'
  
}


export function UiReducer(state, action) {

  switch (action.type) {
    case UI_STATE_ACTIONS.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    case UI_STATE_ACTIONS.SET_HEADER_SEARCH_STRING:
      return {
        ...state,
        headerSearchString: action.payload.headerSearchString,
      };

    case UI_STATE_ACTIONS.SET_SONG_TO_SAVE_TO_USER_PLAYLIST:
       return {
        ...state,
        songToSaveToUserPlaylist: action.payload.songToSaveToUserPlaylist,
      };

    case UI_STATE_ACTIONS.SET_SONG_TO_SAVE_TO_USER_PLAYLIST:
       return {
        ...state,
        songToSaveToUserPlaylist: action.payload.songToSaveToUserPlaylist,
      };

    case UI_STATE_ACTIONS.SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN:
       return {
        ...state,
        saveSongToPlaylistSelectorSectionIsOpen: !state.saveSongToPlaylistSelectorSectionIsOpen,
      };

    case UI_STATE_ACTIONS.SET_PLAYLIST_ID_TO_SAVE:
       return {
        ...state,
        playlistIdToSave: action.payload.playlistIdToSave,
      };

    default:
      return state;
  }
}
