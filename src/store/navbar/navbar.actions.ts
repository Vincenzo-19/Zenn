import { createAction } from '@reduxjs/toolkit';
import { NAVBAR_ACTIONS_TYPES } from './navbar.types';

export const TOGGLE_MENU = createAction<boolean>(
    NAVBAR_ACTIONS_TYPES.TOGGLE_MENU
);
