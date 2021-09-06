import React, { createContext, useReducer } from 'react';
import { UiReducer } from '../reducers/UiReducer';

export const UiContext = createContext();

const initialState = {
    musicData: {},
    test: 'Hello context',
    menuOpen: false,
    settingsOpen: false
}


function UiState({ children }) {

    const [state, dispatch] = useReducer(UiReducer, initialState);

    return (
        <UiContext.Provider value={{ state, dispatch }}>
            {children}
        </UiContext.Provider>
    );
}

export default UiState;
