import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { TIMER_INITIAL_STATE } from './timer.state';
import { TIMER_ACTIONS_TYPES } from './timer.types';

export const TIMER_REDUCER = createReducer(TIMER_INITIAL_STATE, (builder) => {
    builder.addCase(
        TIMER_ACTIONS_TYPES.INCREMENT,
        (state, action: PayloadAction<number>) => {
            state.time += action.payload;
        }
    );
    builder.addCase(
        TIMER_ACTIONS_TYPES.DECREMENT,
        (state, action: PayloadAction<number>) => {
            state.time =
                state.time >= action.payload ? state.time - action.payload : 0;
        }
    );
    builder.addCase(TIMER_ACTIONS_TYPES.START, (state) => {
        state.isActive = true;
        state.isPaused = false;
    });
    builder.addCase(TIMER_ACTIONS_TYPES.PAUSE, (state) => {
        state.isPaused = true;
    });
    builder.addCase(TIMER_ACTIONS_TYPES.RESET, (state) => {
        state.isActive = false;
        state.isPaused = false;
        state.time = 0;
    });
    builder.addCase(TIMER_ACTIONS_TYPES.TICK, (state) => {
        if (state.isActive && !state.isPaused && state.time > 0) {
            state.time -= 1;
        } else if (state.time === 0) {
            state.isActive = false;
        }
    });
});
