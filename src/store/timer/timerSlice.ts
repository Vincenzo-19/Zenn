import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../root.reducer';

interface timerState {
    time: number;
    isActive: boolean;
    isPaused: boolean;
}

const initialState: timerState = {
    time: 0,
    isActive: false,
    isPaused: false,
};

export const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTime(state, action: PayloadAction<number>) {
            state.time = action.payload;
        },
        decrementTime(state, action: PayloadAction<number>) {
            state.time -= action.payload;
        },
        incrementTime(state, action: PayloadAction<number>) {
            state.time += action.payload;
        },
        startTimer(state) {
            state.isActive = true;
            state.isPaused = false;
        },
        pauseTimer(state) {
            state.isPaused = true;
        },
        resetTimer(state) {
            state.time = 0;
            state.isActive = false;
            state.isPaused = false;
        },
    },
});

export const {
    setTime,
    decrementTime,
    incrementTime,
    startTimer,
    pauseTimer,
    resetTimer,
} = timerSlice.actions;

export const selectTimer = (state: RootState) => state.timer;

export default timerSlice.reducer;
