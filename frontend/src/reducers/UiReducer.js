export function UiReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    case 'SEARCH_STRING':
      return {
        ...state,
        searchString: action.payload.searchString,
      };

    default:
      return state;
  }
}
