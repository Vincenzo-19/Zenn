import { createAction } from '@reduxjs/toolkit';
import { TIMER_ACTIONS_TYPES } from './timer.types';

export const INCREMENT_TIME = createAction<number>(
    TIMER_ACTIONS_TYPES.INCREMENT
);
export const DECREMENT_TIME = createAction<number>(
    TIMER_ACTIONS_TYPES.DECREMENT
);
export const START_TIMER = createAction<boolean>(TIMER_ACTIONS_TYPES.START);
export const PAUSE_TIMER = createAction<boolean>(TIMER_ACTIONS_TYPES.PAUSE);
export const RESET_TIMER = createAction(TIMER_ACTIONS_TYPES.RESET);
export const SET_TIME = createAction<number>(TIMER_ACTIONS_TYPES.TICK);
