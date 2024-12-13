import { createReducer } from '@reduxjs/toolkit';
import { NAVBAR_ACTIONS_TYPES } from './navbar.types';
import { NAVBAR_INITIAL_STATE } from './navbar.state';

export const NAVBAR_REDUCER = createReducer(NAVBAR_INITIAL_STATE, (builder) => {
    builder.addCase(NAVBAR_ACTIONS_TYPES.TOGGLE_MENU, (state) => {
        state.isMenuOpen = !state.isMenuOpen;
    });
});
