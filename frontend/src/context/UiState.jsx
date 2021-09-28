import React, { createContext, useReducer } from 'react';
import { UiReducer } from '../reducers/UiReducer';

export const UiContext = createContext();

const initialState = {
  headerSearchString: 'cold',
  songToSaveToUserPlaylist: '',
  saveSongToPlaylistSelectorSectionIsOpen: false,
  playlistIdToSave: '',
  mobileMenuIsOpen: false,
  modalOpen: false,
  modalText: '',
  confirmAction: '',
  pushDir: '',
  isDeletingPlaylist: false,
  currentPlaylistId: '',
  selectedSongCardIndex: null,
};

function UiState({ children }) {
  const [state, dispatch] = useReducer(UiReducer, initialState);

  return <UiContext.Provider value={{ state, dispatch }}>{children}</UiContext.Provider>;
}

export default UiState;
