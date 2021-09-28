export const UI_STATE_ACTIONS = {
  TOGGLE_MENU: ' TOGGLE_MENU',
  SET_HEADER_SEARCH_STRING: 'SET_HEADER_SEARCH_STRING',
  SET_SONG_TO_SAVE_TO_USER_PLAYLIST: 'SET_SONG_TO_SAVE_TO_USER_PLAYLIST',
  SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN: 'SET_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION_IS_OPEN',
  CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION: 'CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION',
  SET_FULLSCREEN_VIDEO_MODE: 'SET_FULLSCREEN_VIDEO_MODE',
  SET_PLAYLIST_ID_TO_SAVE: 'SET_PLAYLIST_ID_TO_SAVE',
  SET_MOBILE_MENU_IS_OPEN: 'SET_MOBILE_MENU_IS_OPEN',
  SET_CLOSE_MENU_MOBILE: 'SET_CLOSE_MENU_MOBILE',
  SET_MODAL_IS_OPEN: 'SET_MODAL_IS_OPEN',
  SET_MODAL_IS_CLOSED: 'SET_MODAL_IS_CLOSED',
  SET_PLAYLIST_ID_TO_REMOVE: 'SET_PLAYLIST_ID_TO_REMOVE',
  DELETE_PLAYLIST: 'DELETE_PLAYLIST',
  RESET_DELETING_PLAYLIST: 'RESET_DELETING_PLAYLIST',
  SET_CURRENT_PLAYLIST_ID: 'SET_CURRENT_PLAYLIST_ID',
  SET_SELECTED_SONG_CARD_INDEX: 'SET_SELECTED_SONG_CARD_INDEX',
};

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

    case UI_STATE_ACTIONS.CLOSE_SAVE_SONG_TO_PLAYLIST_SELECTOR_SECTION:
      return {
        ...state,
        saveSongToPlaylistSelectorSectionIsOpen: action.payload.saveSongToPlaylistSelectorSectionIsOpen,
      };

    case UI_STATE_ACTIONS.SET_PLAYLIST_ID_TO_SAVE:
      return {
        ...state,
        playlistIdToSave: action.payload.playlistIdToSave,
      };

    case UI_STATE_ACTIONS.SET_MOBILE_MENU_IS_OPEN:
      return {
        ...state,
        mobileMenuIsOpen: !state.mobileMenuIsOpen,
      };

    case UI_STATE_ACTIONS.SET_CLOSE_MENU_MOBILE:
      return {
        ...state,
        mobileMenuIsOpen: false,
      };

    case UI_STATE_ACTIONS.SET_MODAL_IS_OPEN:
      return {
        ...state,
        modalOpen: true,
        modalText: action.payload.modalText,
        confirmAction: action.payload.confirmAction,
        pushDir: action.payload.pushDir,
      };

    case UI_STATE_ACTIONS.SET_PLAYLIST_ID_TO_REMOVE:
      return {
        ...state,
        playlistIdToRemove: action.payload.playlistId,
      };

    case UI_STATE_ACTIONS.DELETE_PLAYLIST:
      return {
        ...state,
        isDeletingPlaylist: true,
        modalOpen: false,
      };

    case UI_STATE_ACTIONS.SET_MODAL_IS_CLOSED:
      return {
        ...state,
        playlistIdToRemove: '',
        modalOpen: false,
      };

    case UI_STATE_ACTIONS.RESET_DELETING_PLAYLIST:
      return {
        ...state,
        playlistIdToRemove: '',
        isDeletingPlaylist: false,
      };

    case UI_STATE_ACTIONS.SET_CURRENT_PLAYLIST_ID:
      return {
        ...state,
        currentPlaylistId: action.payload.currentPlaylistId,
      };
    case UI_STATE_ACTIONS.SET_SELECTED_SONG_CARD_INDEX:
      return {
        ...state,
        selectedSongCardIndex: action.payload.selectedSongCardIndex,
      };

    default:
      return state;
  }
}
